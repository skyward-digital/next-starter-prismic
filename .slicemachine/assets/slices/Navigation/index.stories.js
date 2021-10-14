import MyComponent from '../../../../slices/Navigation';

export default {
  title: 'slices/Navigation'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"navigation","items":[],"primary":{"title":[{"type":"paragraph","text":"Id culpa Lorem sint fugiat amet. Reprehenderit fugiat sit aliqua minim amet reprehenderit aute qui magna velit ullamco id enim. Dolor excepteur eu elit aute ea veniam.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithSubnav = () => <MyComponent slice={{"variation":"withSubnav","name":"With Subnav","slice_type":"navigation","items":[{"title":[{"type":"paragraph","text":"Et et fugiat labore qui aute voluptate et exercitation et incididunt ea ad.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Occaecat voluptate incididunt reprehenderit quis velit mollit cupidatat reprehenderit nisi deserunt qui culpa commodo. Labore nulla labore nisi in ex in nisi fugiat commodo mollit excepteur dolore id.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"paragraph","text":"Labore cupidatat cupidatat in ad deserunt ut velit aute anim proident deserunt in esse magna exercitation. Anim dolore dolore deserunt pariatur consectetur aute. Laboris cillum eu dolor cillum nisi veniam.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Occaecat adipisicing tempor nostrud proident nulla ullamco incididunt. Velit elit anim id reprehenderit cillum eiusmod aute do pariatur laborum ex.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"paragraph","text":"Nisi pariatur sit cillum. Incididunt exercitation eiusmod ut excepteur tempor et sunt. Elit eiusmod esse fugiat eu do ipsum irure et mollit nulla officia eiusmod fugiat laboris culpa.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_WithSubnav"}} />
_WithSubnav.storyName = 'With Subnav'
