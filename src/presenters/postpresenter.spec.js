import PostPresenter from './PostPresenter'
import flushPromises from 'flush-promises'
describe('PostPresenter', () => {
  let presenter
  beforeEach(() => {
    presenter = new PostPresenter()
  })
  describe('constructor', () => {
    it('should have catUrl or the image would not display on post page', () => {
      expect(presenter.catUrl).toEqual('')
    })
  })
  describe('postCat', () => {
    it('should have url', () => {
      let view = input('catUrl', 'url')
      presenter.postCat()
      view.validate()
    })

    it('should have comment', () => {
      let view = input('title', 'comment')
      presenter.postCat()
      view.validate()
      flushPromises()
    })

    describe('success', () => {
      it('should go back to home page', async () => {
        let view = new MockBackToHome()
        presenter.view = view
        presenter.catUrl = 'url'
        presenter.title = 'title'
        presenter.postCat()
        await flushPromises()
        view.validate()
      })

      class MockBackToHome {
        constructor () { this.called = false }
        pushNewCat () { return Promise.resolve() }
        backToHome () { this.called = true }
        validate () {
          expect(this.called).toEqual(true)
        }
      }
    })
    function input (textField, jsonField) {
      let view = new StubPushNewCat(jsonField)
      presenter[textField] = view.expected
      presenter.view = view
      return view
    }
    class StubPushNewCat {
      constructor (field) {
        this.expected = 'expected'
        this.field = field
      }
      pushNewCat (newCat) {
        this.actual = newCat[this.field]
        return Promise.resolve()
      }
      validate () {
        expect(this.expected).toEqual(this.actual)
      }
    }
  })
})
