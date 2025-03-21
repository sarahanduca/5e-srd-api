import * as mongoose from 'mongoose';
import { APIReference } from '@/models/2014/common/types';

export type Rule = {
  _id?: mongoose.Types.ObjectId;
  desc: string;
  index: string;
  name: string;
  subsections: APIReference[];
  url: string;
  updated_at: string;
};
