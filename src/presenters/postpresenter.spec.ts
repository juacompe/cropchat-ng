import { PostPresenter, View } from './PostPresenter'
import { fakeAsync, flush } from '@angular/core/testing';


describe('PostPresenter', () => {
  let presenter
  beforeEach(() => {
    presenter = new PostPresenter(new MockBackToHome())
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
    })

    describe('success', () => {
      it('should go back to home page', fakeAsync(() => {
        let view = new MockBackToHome()
        presenter.view = view
        presenter.catUrl = 'url'
        presenter.title = 'title'
        presenter.postCat()
        flush()
        view.validate()
      }))

    })
    function input (textField, jsonField) {
      let view = new StubPushNewCat(jsonField)
      presenter[textField] = view.expected
      presenter.view = view
      return view
    }
    class StubPushNewCat implements View {
      $http: any
      expected = 'expected'
      actual = ''
      
      constructor (private field) {
        this.field = field
      }
      pushNewCat (newCat) {
        this.actual = newCat[this.field]
        return Promise.resolve()
      }
      backToHome () {}
      validate () {
        expect(this.expected).toEqual(this.actual)
      }
    }
  })
  class MockBackToHome implements View {
    $http: any
    called = false
    constructor () {}
    pushNewCat () { return Promise.resolve() }
    backToHome () { this.called = true }
    validate () {
      expect(this.called).toEqual(true)
    }
  }
})
