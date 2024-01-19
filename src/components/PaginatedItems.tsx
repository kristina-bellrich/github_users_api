import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Repos } from './Repos';
import { IRepositories } from '../data/data';

interface IPagination {
  itemsPerPage: number;
  repository: IRepositories[];
}

const ITEMS_PER_PAGE = 4;

const PaginatedItems: FC<IPagination> = ({ repository, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems =
    repository.length > 0 ? repository.slice(itemOffset, endOffset) : [];
  const pageCount = Math.ceil(repository.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % repository.length;
    setItemOffset(newOffset);
  };
  const remaindingItem =  endOffset! < repository.length
    ? endOffset
    : endOffset - (repository.length % ITEMS_PER_PAGE)

  return (
    <div>
      <h1>Repositories ({repository.length})</h1>
      <Repos currentItems={currentItems} />
      <div className='pag'>
        <div className='p1'>
          1 -
         {remaindingItem}
          of {repository.length} Items
        </div>

        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          nextClassName='btn'
          activeLinkClassName='active'
        />
      </div>
    </div>
  );
};

export { PaginatedItems };
