import App from '@hubleto/react-ui/core/App'
import TableFiles from "./Components/FC/TableFiles"
import TableFolders from './Components/FC/TableFolders'
import TableDocuments from "./Components/FC/TableDocuments"
import TableVersions from "./Components/FC/TableVersions"
import TableReviews from "./Components/FC/TableReviews"
import TableReviewResults from './Components/FC/TableReviewResults'
import TableTemplates from "./Components/FC/TableTemplates"
import FileBrowser from "./Components/FC/FileBrowser"


class DocumentsApp extends App {
  init() {
    super.init();

    // register react components
    globalThis.hubleto.registerReactComponent('DocumentsTableDocuments', TableDocuments);
    globalThis.hubleto.registerReactComponent('DocumentsTableVersions', TableVersions);
    globalThis.hubleto.registerReactComponent('DocumentsTableReviews', TableReviews);
    globalThis.hubleto.registerReactComponent('DocumentsTableReviewResults', TableReviewResults);
    globalThis.hubleto.registerReactComponent('DocumentsTableFiles', TableFiles);
    globalThis.hubleto.registerReactComponent('DocumentsTableFolders', TableFolders);
    globalThis.hubleto.registerReactComponent('DocumentsFileBrowser', FileBrowser);
    globalThis.hubleto.registerReactComponent('DocumentsTableTemplates', TableTemplates);
  }
}

// register app
globalThis.hubleto.registerApp('Hubleto/App/Community/Documents', new DocumentsApp());
