import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PeoplePagePreview from './preview-templates/PeoplePagePreview'
import ProjectPostPreview from './preview-templates/ProjectPostPreview'
import SoftwarePagePreview from './preview-templates/SoftwarePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('people', PeoplePagePreview)
CMS.registerPreviewTemplate('projects', ProjectPostPreview)
CMS.registerPreviewTemplate('software', SoftwarePagePreview)
