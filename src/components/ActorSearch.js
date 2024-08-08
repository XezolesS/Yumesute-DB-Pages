import './ActorSearch.css';

function ActorSearch() {
  return (
    <div className='actor-search-wrapper'>
      <input className='actor-search-bar' placeholder='Search Actors...' />
      <div className='actor-tag-box'>
        <span className='category-tag'>일단</span>
        <span className='category-tag'>임시</span>
        <span className='category-tag'>카테고리</span>
        <span className='category-tag'>태그</span>
        <span className='category-tag'>레이아웃</span>
        <span className='category-tag'>프리뷰</span>
        <span className='category-tag'>선택</span>
        <span className='category-tag'>가능해야</span>
        <span className='category-tag'>함</span>
        <span className='category-tag'>한글 폰트</span>
        <span className='category-tag'>추천좀</span>
      </div>
      <div className='actor-list-box-grid'>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
        <div className='actor-icon'>Icon</div>
      </div>
    </div>
  );
}

export default ActorSearch;