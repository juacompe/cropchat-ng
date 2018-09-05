import CatAPI from './CatAPI'

describe('CatAPI', () => {
  describe('parseUrlFromResponse', () => {
    it('should return url', () => {
      let response = createResponseWithBody(`
      <response>
          <data>
              <images>
                  <image>
                      <id>ib</id>
                      <url>https://25.media.tumblr.com/tumblr_lz7k712tkY1r2rj8po1_500.jpg</url>
                      <source_url>https://thecatapi.com/?image_id=ib</source_url>
                  </image>
              </images>
          </data>
      </response>`)
      let url = CatAPI.parseUrlFromResponse(response)
      expect(url).toEqual('https://25.media.tumblr.com/tumblr_lz7k712tkY1r2rj8po1_500.jpg')
    })

    function createResponseWithBody (responseBody) {
      return responseBody
    }
  })
})
