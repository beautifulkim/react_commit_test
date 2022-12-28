function Notice( props ){
    return (
      <>
        <h2>{ props.objTit }</h2>
        <p>{ props.objCon.length } 개의 게시글 존재</p>
        <ul className={ `${ props.objCls[0]} ${ props.objCls[1]}` }>
          {
            props.objCon.map(( item, index ) => {
              
              console.log( item , index );
  
              return (
                <li key={ 'list'+index }>
                  <p>{ item.subject }</p>
                  <div>{ item.contents }</div>
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }

  export default Notice;