import Notice from './component/Notice';
import noticeData from './data/notice.json';

function App() {
  const objNoticeData = noticeData;
  
  return (
    <div className="App">
      <Notice 
        objTit={ objNoticeData.title } 
        objCls={ objNoticeData.cls } 
        objCon={ objNoticeData.content }></Notice>
    </div>
  );
}

export default App;
