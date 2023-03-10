import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/util/validators";

import { useForm } from "../../shared/hooks/form-hook";

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case "INPUT_CHANGE":
//       let formIsValid = true;
//       for (const inputId in state.inputs) {
//         if (inputId === action.inputId) {
//           formIsValid = formIsValid && action.isValid;
//         } else {
//           formIsValid = formIsValid && state.inputs[inputId].isValid;
//         }
//       }
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.inputId]: { value: action.value, isValid: action.isValid },
//         },
//         isValid: formIsValid,
//       };
//     default:
//       return state;
//   }
// };

const NewPlace = () => {
  
  const [formState,inputHandler] = useForm({
        title: {
          value: "",
          isValid: false,
        },
        description: {
          value: "",
          isValid: false,
        },
        address: {
          value: "",
          isValid: false,
        }
      },
      false,
  );

  

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to backend
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title!"
        onInput={inputHandler}
      />

      <Input
        id="description"
        type="text"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters!)"
        onInput={inputHandler}
      />

      <Input
        id="address"
        label="Address"
        element="input"
        validators={[VALIDATOR_REQUIRE(5)]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
