import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const ReferralForm = ({ closeModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://your-backend-url.com/api/referral", data);
      alert("Referral submitted successfully!");
      closeModal();
    } catch (error) {
      alert("Error submitting referral.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Typography variant="h6" fontWeight="bold">Refer a Friend</Typography>
      
      <TextField label="Your Name" fullWidth {...register("referrerName", { required: true })} 
        error={!!errors.referrerName} helperText={errors.referrerName ? "Required" : ""} />
      
      <TextField label="Your Email" type="email" fullWidth {...register("referrerEmail", { required: true })} 
        error={!!errors.referrerEmail} helperText={errors.referrerEmail ? "Required" : ""} />
      
      <TextField label="Friend's Name" fullWidth {...register("friendName", { required: true })} 
        error={!!errors.friendName} helperText={errors.friendName ? "Required" : ""} />
      
      <TextField label="Friend's Email" type="email" fullWidth {...register("friendEmail", { required: true })} 
        error={!!errors.friendEmail} helperText={errors.friendEmail ? "Required" : ""} />
      
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit Referral
      </Button>
    </form>
  );
};

export default ReferralForm;