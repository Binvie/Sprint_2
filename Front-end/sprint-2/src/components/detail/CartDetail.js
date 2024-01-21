import React, {useContext} from 'react';
import {prod2} from "../../assets/images";

function CartDetail() {

    return (
        <>
            <h1>Total : </h1>
            {/*{products.map((product, 1) => {*/}
            {/*    */}
            {/*})}*/}
            <tr>
                <td className="product-thumbnail">
                    <img
                        src={prod2}
                        alt="Image"
                        className="img-fluid"
                    />
                </td>
                <td className="product-name">
                    <h2 className="h5 text-black">Product 2</h2>
                </td>
                <td>$49.00</td>
                <td>
                    <div
                        className="input-group mb-3 d-flex align-items-center quantity-container"
                        style={{maxWidth: 120}}
                    >
                        <div className="input-group-prepend">
                            <button
                                className="btn btn-outline-black decrease"
                                type="button"
                            >
                                −
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control text-center quantity-amount"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-black increase"
                                type="button"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </td>
                <td>$49.00</td>
                <td>
                    <button  className="btn btn-black btn-sm">
                        X
                    </button>
                </td>
            </tr>
        </>
    );
}

export default CartDetail;