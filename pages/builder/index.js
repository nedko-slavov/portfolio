import AdminBuilder from '../../components/cms/AdminBuilder';
import PageRender from '../../components/cms/PageRender';
import PAGE from '../../components/cms/PAGE';
import "../../styles.scss";

const LOCAL_STORAGE_KEY = 'raketa-cms-example'

const pickPage = () => {
  const loadedPage = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  return loadedPage ? JSON.parse(loadedPage) : PAGE
}


export default () => {
  if (typeof window === 'undefined') {
    return <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className="text-center">Loading...</h3>
  }

  return (
    <React.Fragment>
       <AdminBuilder
          page={pickPage()}
          back_url='https://google.com/'
          onSave={(page) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(page))
          }}
        />
    </React.Fragment>
  )
}