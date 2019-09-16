//app.ts
export interface IMyApp {
  globalData: {
    test: string
  }
}

App<IMyApp>({
  onLaunch() {
  },
  globalData: {
    test: 'aaaa'
  }
})