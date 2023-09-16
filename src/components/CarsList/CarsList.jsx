import CarItem from "components/CarItem/CarItem";
import css from "./CarList.module.css"

const CarsList = ({cars, onLoadMoreBtnClick}) => {

    return (
    <main className={css.main}>
        <ul className={css.CarList}>
            {cars.map(car => (
                <li key={car.id}>
                    <CarItem 
                        model={car.model}
                        make={car.make}
                        year={car.year}
                        type={car.type}
                        mileage={car.mileage}
                        rentalCompany={car.rentalCompany}
                        rentalConditions={car.rentalConditions}
                        rentalPrice={car.rentalPrice}
                        id={car.id}
                        accessories={car.accessories}
                        address={car.address}
                        description={car.description}
                        engineSize={car.engineSize}
                        fuelConsumption={car.fuelConsumption}
                        functionalities={car.functionalities}
                        img={car?.img}

                        isFavorite={car.isFavorite}
                    />
                </li>             
            ))}
        </ul>

        <button className={css.loadMoreBtn} onClick={onLoadMoreBtnClick}>Load more</button>
    </main>
    )
};

export default CarsList;