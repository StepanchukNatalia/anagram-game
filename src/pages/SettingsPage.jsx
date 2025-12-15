import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GameLayout from "../components/layout/GameLayout";
import Button from "../components/ui/Button";
import { useSettings } from "../context/SettingsContext";

// Схема валідації
const schema = yup
  .object({
    timeLimit: yup
      .number()
      .typeError("Має бути числом")
      .positive("Час має бути додатнім")
      .min(10, "Мінімум 10 секунд")
      .max(300, "Максимум 300 секунд")
      .required("Обов'язкове поле"),
    difficulty: yup.string().required(),
    allowHints: yup.boolean(),
  })
  .required();

const SettingsPage = ({ onBack }) => {
  const { settings, updateSettings } = useSettings();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: settings,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateSettings(data);
    onBack();
  };

  const formGroupStyle = { marginBottom: "15px", textAlign: "left" };
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };
  const errorStyle = { color: "red", fontSize: "12px", marginTop: "5px" };

  return (
    <GameLayout title="Налаштування гри">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Час на гру (сек)</label>
          <input type="number" {...register("timeLimit")} style={inputStyle} />
          <p style={errorStyle}>{errors.timeLimit?.message}</p>
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Складність
          </label>
          <select
            {...register("difficulty")}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="normal">Нормальна</option>
            <option value="hard">Важка</option>
            <option value="expert">Експерт 🔥</option>
          </select>
        </div>

        <div
          style={{
            ...formGroupStyle,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" {...register("allowHints")} id="hints" />
          <label htmlFor="hints" style={{ margin: 0 }}>
            Дозволити підказки
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button variant="secondary" onClick={onBack} type="button">
            Назад
          </Button>
          <Button type="submit">Зберегти</Button>
        </div>
      </form>
    </GameLayout>
  );
};

export default SettingsPage;
