import { useForm } from "react-hook-form";

import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import FormRow from "../../../ui/FormRow";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import Textarea from "../../../ui/Textarea";
import { useStrings } from "./useStrings";
import { useUpdateAboutMe } from "./useUpdateAboutMe";

function WhatIdoAndAm() {
  const { strings } = useStrings();
  const { isPendingUpdateAboutMe, updateAboutMe } = useUpdateAboutMe();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ values: strings });

  const onSubmit = (data) => {
    updateAboutMe(data);
  };

  return (
    <>
      <Heading as="h2">Who I am and what I do</Heading>
      <Spacer size={3} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormRow label="Who I am" error={errors?.whoIAm?.message}>
            <Input
              id="who-i-am"
              disabled={isPendingUpdateAboutMe}
              {...register("whoIAm", {
                required: {
                  value: true,
                  message: "Who you are is required",
                },
              })}
            />
          </FormRow>
          <FormRow label="What I do" error={errors?.whatIDo?.message}>
            <Textarea
              id="intro"
              disabled={isPendingUpdateAboutMe}
              {...register("whatIDo", {
                required: {
                  value: true,
                  message: "What you do is required",
                },
              })}
            />
          </FormRow>
          <Row type="horizontal" justify="end">
            <Button
              type="reset"
              variation="secondary"
              onClick={() => {
                console.log("reset");
                reset();
              }}
            >
              Reset
            </Button>
            <Button type="submit" disabled={isPendingUpdateAboutMe}>
              Save
            </Button>
          </Row>
        </Box>
      </form>
    </>
  );
}

export default WhatIdoAndAm;
