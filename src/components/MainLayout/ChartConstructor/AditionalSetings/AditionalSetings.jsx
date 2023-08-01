import * as SC from "./AditionalSetings.styled";
// import { SingleInfo } from "./SingleInfo/SingleInfo";
import { FilterSelects } from "./FilterSelects/FilterSelects";

export const AditionalSetings = ({ aditionalSetings, data, setFilter }) => {
  const { singleInfo, filterSelects } = aditionalSetings;
  if (singleInfo || filterSelects?.length > 0) {
    return (
      <SC.AditionalSetingsWrapper>
        {/* {singleInfo && <SingleInfo singleInfo={singleInfo} />} */}
        {filterSelects && filterSelects.length > 0 && (
          <FilterSelects
            setFilter={setFilter}
            data={data}
            filterSelects={filterSelects}
          />
        )}
      </SC.AditionalSetingsWrapper>
    );
  }
};
