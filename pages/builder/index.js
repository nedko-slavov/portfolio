import React from 'react';
import AdminBuilder from '../../components/cms/AdminBuilder';
import PAGE from '../../components/cms/PAGE';
import '../../styles.scss';

const LOCAL_STORAGE_KEY = 'raketa-cms-example';

const loadinTitleStyles = {
  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
};

const pickPage = () => {
  const loadedPage = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return loadedPage ? JSON.parse(loadedPage) : PAGE;
};

export default () => {
  if (typeof window === 'undefined') {
    return <h3 style={loadinTitleStyles} className="text-center">Loading...</h3>;
  }

  return (
    <AdminBuilder
      page={pickPage()}
      back_url="https://google.com/"
      onSave={(page) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(page))}
    />
  );
};
