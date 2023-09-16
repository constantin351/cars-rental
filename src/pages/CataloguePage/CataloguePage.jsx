import { useEffect, useState } from "react";
// import { getAllCars } from "api/getAllCars";
import getAllCars from "api/getAllCars";
import CarsList from "components/CarsList/CarsList";


const CataloguePage = () => {
    const [allCars, setAllCars] = useState([]);
    //
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    // const [totalHits, setTotalHits] = useState(0);
    // const [imagesPerPage, setImagesPerPage] = useState(8);
    //
    
    useEffect(() => {
        fetchAllCars();
        console.log("useeffect")

        async function fetchAllCars() {
            try {
                // const {data} = await getAllCars();
                const {data} = await getAllCars(pageNumber);
                console.log('data', data)
                // setAllCars(data)
                //
                setAllCars(prevState => [...prevState, ...data]);
                // setTotalHits(allCars.length);
                // console.log(totalHits)
                // setImagesPerPage()
                //
            } catch (error) {
                console.log('error', error)
                // setError(error);
            }
        }
    }, [pageNumber]);

    const onLoadMore = () => {
        setPageNumber(prevState => prevState + 1);
      };
    

    return <>
    {allCars && <CarsList cars={allCars} onLoadMoreBtnClick={onLoadMore}/>}
    </>
};

export default CataloguePage;