import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        {/* <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p> */}
        <p>asdf</p>
        <iframe src="https://mp.weixin.qq.com/s/IKBTTeVP2nVqVl9GmVTAVw" frameborder="0" scrolling="no" width="100%" height="600"></iframe>
      </div>
    </Layout>
  );
}