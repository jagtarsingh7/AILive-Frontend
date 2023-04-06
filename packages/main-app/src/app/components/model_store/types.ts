export type Model = {
  tags: string;
  id: number;
  user_id: number;
  custom_functions: { [key: string]: string };
  pre_model_order: string[];
  post_model_order: string[];
  predict_function: string;
  storage_options: { [key: string]: string };
  container_options: { [key: string]: string };
  model_metadata: { [key: string]: any };
  model_version: number;
  input_features_and_types: { [key: string]: string };
  output_names_and_types: { [key: string]: string };
};
