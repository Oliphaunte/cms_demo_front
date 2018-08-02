const LOADING = 'LOADING'

export const isLoading = (bool) => ({
  type: LOADING,
  isLoading: bool
})