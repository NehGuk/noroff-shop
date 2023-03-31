import React from "react";
import { useEffect } from "react";
import { CheckOutSuccessGrid, CheckOutSuccessSection, CheckOutSuccessGoToProducts, CheckOutSuccessMessage, CheckOutSuccessTitle } from "./CheckOutSuccess.style";

export default function CheckOutSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CheckOutSuccessSection>
      <CheckOutSuccessGrid>
        <CheckOutSuccessTitle>
          <h1>Thank you!</h1>
        </CheckOutSuccessTitle>
        <CheckOutSuccessMessage>
          <p>
            <strong>You have successfully placed your order.</strong>
          </p>
        </CheckOutSuccessMessage>
        <CheckOutSuccessGoToProducts to="/">Back to homepage</CheckOutSuccessGoToProducts>
      </CheckOutSuccessGrid>
    </CheckOutSuccessSection>
  );
}
