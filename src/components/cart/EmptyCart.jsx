import React from "react";
import { useEffect } from "react";
import { EmptyCardGrid, EmptyCardSection, EmptyCartGoToProducts, EmptyCartMessage, EmptyCartTitle } from "./EmptyCart.style";

export default function EmptyCart() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <EmptyCardSection>
            <EmptyCardGrid>
                <EmptyCartTitle><h1>My cart</h1></EmptyCartTitle>
                <EmptyCartMessage><p><strong>You haven't added any items to your cart yet.</strong></p></EmptyCartMessage>
                <EmptyCartGoToProducts to="/">Browse products</EmptyCartGoToProducts>
            </EmptyCardGrid>
        </EmptyCardSection>
    )
}



