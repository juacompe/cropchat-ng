import CatAPI from '../service/catapi'

export interface View {
  $http
  backToHome(): void
  pushNewCat(cat: Object)
}

export class PostPresenter {
  catUrl = ''
  title = ''

  constructor (public view: View) {}
  init () {
    CatAPI.getRandomCatUrl(this.view.$http)
      .then(url => { this.catUrl = url })
  }
  postCat () {
    let me = this
    function back() {
      me.view.backToHome()
    }
    this.view.pushNewCat({
      url: this.catUrl,
      comment: this.title,
      info: 'Posted by Charles on Tuesday',
      created_at: -1 * new Date().getTime()
    }).then(back)
  }
}
