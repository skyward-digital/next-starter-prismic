import MyComponent from '../../../../slices/CallToAction';

export default {
  title: 'slices/CallToAction'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Evolve open-source e-business","spans":[]}],"description":[{"type":"paragraph","text":"Quis adipisicing fugiat voluptate magna cillum tempor qui. Proident amet excepteur non deserunt sint.","spans":[]}],"primaryLink":{"link_type":"Web","url":"https://prismic.io"},"primaryLinkLabel":"matrix bleeding-edge metrics","secondaryLink":{"link_type":"Web","url":"http://twitter.com"},"secondaryLinkLabel":"strategize strategic methodologies"},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _Small = () => <MyComponent slice={{"variation":"small","name":"Small","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading3","text":"Integrate extensible convergence","spans":[]}],"primaryLink":{"link_type":"Web","url":"http://twitter.com"},"primaryLinkLabel":"optimize plug-and-play bandwidth","secondaryLink":{"link_type":"Web","url":"http://google.com"},"secondaryLinkLabel":"drive 24/7 portals"},"id":"_Small"}} />
_Small.storyName = 'Small'

export const _WithImage = () => <MyComponent slice={{"variation":"withImage","name":"With Image","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Grow next-generation markets","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur tempor ullamco quis ut aute sint velit aliquip. Proident magna cillum aliquip ut nulla duis consequat ipsum et cupidatat laboris duis officia.","spans":[]}],"primaryLink":{"link_type":"Web","url":"http://google.com"},"primaryLinkLabel":"seize bricks-and-clicks initiatives","secondaryLink":{"link_type":"Web","url":"http://twitter.com"},"secondaryLinkLabel":"exploit virtual communities","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"}},"id":"_WithImage"}} />
_WithImage.storyName = 'With Image'
