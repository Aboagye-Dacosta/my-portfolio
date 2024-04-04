import { useForm } from "react-hook-form";

import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import FormRow from "../../../ui/FormRow";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import Textarea from "../../../ui/Textarea";

import SpinnerSm from "../../../ui/SpinnerSm";
import { useStrings } from "./useStrings";
import { useUpdateAboutMe } from "./useUpdateAboutMe";

function AboutMeDescription() {
  const { strings } = useStrings();
  const { isPendingUpdateAboutMe, updateAboutMe } = useUpdateAboutMe();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ values: strings });

  const onSubmit = (data) => {
    updateAboutMe(data);
  };

  return (
    <>
      <Heading as="h2">About Me</Heading>
      <Spacer size={3} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormRow label="Your name" error={errors?.name?.message}>
            <Input
              disabled={isPendingUpdateAboutMe}
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Your name is required",
                },
              })}
            />
          </FormRow>
          <FormRow label="Intro" error={errors?.introDescription?.message}>
            <Textarea
              disabled={isPendingUpdateAboutMe}
              id="intro"
              {...register("introDescription", {
                required: {
                  value: true,
                  message: "Intro is required",
                },
              })}
            />
          </FormRow>
          <FormRow
            label="Currently doing"
            error={errors?.currentlyDoingDescription?.message}
          >
            <Textarea
              disabled={isPendingUpdateAboutMe}
              id="current"
              {...register("currentlyDoingDescription", {
                required: {
                  value: true,
                  message: "What you are currently doing is required",
                },
              })}
            />
          </FormRow>
          <FormRow
            label="Do at free time"
            error={errors?.freeTimeDescription?.message}
          >
            <Textarea
              id="free time"
              {...register("freeTimeDescription", {
                required: {
                  value: true,
                  message: "What you do at you free time is required",
                },
              })}
            />
          </FormRow>
          <Row type="horizontal" justify="end">
            <Button variation="secondary" disabled={isPendingUpdateAboutMe}>
              Reset
            </Button>
            <Button type="submit" disabled={isPendingUpdateAboutMe}>
              <Row type="horizontal" items="center" justify="center">
                {isPendingUpdateAboutMe && <SpinnerSm />}
                <span> Save</span>
              </Row>
            </Button>
          </Row>
        </Box>
      </form>
    </>
  );
}

export default AboutMeDescription;
