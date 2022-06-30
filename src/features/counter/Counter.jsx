import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import CustomButton from "../../components/UI/Button/CustomButton";
import CustomField from "../../components/UI/fields/CustomField";
import { Box } from "@mui/material";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <div>
      <CustomButton
        onClick={() => dispatch(decrement())}
        sx={{ mx: "auto" }}
        variant="outlined"
        size="medium"
        color="primary"
      >
        Decrement
      </CustomButton>
      <span style={{ padding: "10px" }}>{count}</span>
      <CustomButton
        onClick={() => dispatch(increment())}
        sx={{ mx: "auto" }}
        variant="outlined"
        size="medium"
        color="primary"
      >
        Increment
      </CustomButton>
      <Box>
        <CustomField
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          sx={{ my: 2 }}
          type="number"
          placeholder="type your login"
          label="Login"
          variant="outlined"
        />
        <CustomButton
          onClick={() => dispatch(incrementByAmount(amount))}
          sx={{ ml: "5" }}
          variant="outlined"
          size="medium"
          color="primary"
        >
          incrementByAmount
        </CustomButton>
      </Box>
    </div>
  );
};

export default Counter;
