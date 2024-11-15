import { PageButton, PaginationContainer } from "./Style";

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          onClick={() => paginate(number)}
          active={number === currentPage}
        >
          {number}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
