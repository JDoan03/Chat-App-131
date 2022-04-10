import mongoose from 'mongoose';
import { DonationSchema } from '../models/model.js'

const Donation = mongoose.model('Donations', DonationSchema);

export const addNewDonation = (req,res) => {
  let newDonation = new Donation(req.body);
  newDonation.save((err, donation) => {
    if (err) {
      res.send(err)
    }
    res.json(donation)
  })
}