export interface ProductRes {
  id: string;
  src_img_remove_bg: string;
  name_product: string;
  src_img: string;
  ingredient: string;
  uses: string;
  dosage: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
