import { LocalScheme } from '~auth/runtime'
import login from '~/apollo/mutations/login'
import getMe from '~/apollo/queries/getMe'
// import register from '~/apollo/mutations/register'

export default class GraphQLScheme extends LocalScheme {
  constructor (...params) {
    super(...params)

    // This option will prevent $axios methods from being called
    // since we are not using axios
    this.options.token.global = false
  }

  async login (credentials, { reset = true } = {}) {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
      // $config,
    } = this.$auth.ctx.app

    // Ditch any leftover local tokens before attempting to log in
    if (reset) {
      this.$auth.reset({ resetInterceptor: false })
    }

    // Make login request
    const response = await apolloClient
      .mutate({
        mutation: login,
        variables: credentials,
      })
      .then(({ data }) => data && data.login)

    this.token.set(response.jwt)

    // Set your graphql-token
    await $apolloHelpers.onLogin(response.jwt)

    // Fetch user
    await this.fetchUser()

    // Update tokens
    return response.jwt
  }

  // Override `fetchUser` method of `local` scheme
  fetchUser () {
    const {
      apolloProvider: { defaultClient: apolloClient },
    } = this.$auth.ctx.app

    // Token is required but not available
    if (!this.check().valid) {
      return
    }

    // Try to fetch user
    return apolloClient
      .query({
        query: getMe,
        fetchPolicy: 'no-cache', // Very Important!
      })
      .then(({ data }) => {
        if (!data.me) {
          const error = new Error('User Data response not resolved')
          return Promise.reject(error)
        }

        this.$auth.setUser(data.me)

        return data.me
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: 'fetchUser' })
        return Promise.reject(error)
      })
  }

  logout () {
    const {
      // apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app

    // await apolloClient
    //   .mutate({
    //     mutation: LOGOUT_MUTATION,
    //   })
    //   .catch(() => {
    //     // console.log(err)
    //   })

    // But reset regardless
    $apolloHelpers.onLogout()
    return this.$auth.reset({ resetInterceptor: false })
  }

  initializeRequestInterceptor () {
    // Instead of initializing axios interceptors, Do nothing
    // Since we are not using axios
  }

  reset () {
    this.$auth.setUser(false)
    this.token.reset()
  }
}
