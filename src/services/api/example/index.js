import api from '../api'

class _ExampleApiService {
  async getAll() {
    const examples = await api.get('/examples')

    // Here you can do something with the incoming data

    return examples
  }
}

export const ExampleApiService = new _ExampleApiService()
