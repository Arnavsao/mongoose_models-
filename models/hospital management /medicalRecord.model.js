import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicallRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
