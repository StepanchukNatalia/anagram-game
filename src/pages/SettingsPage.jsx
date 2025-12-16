import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Імпорт
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import { useSettings } from '../context/SettingsContext';

const schema = yup.object({
    timeLimit: yup.number().typeError('Має бути числом').positive().min(10).max(300).required(),
    difficulty: yup.string().required(),
    allowHints: yup.boolean()
  }).required();

const SettingsPage = () => { 
  const navigate = useNavigate(); 
  const { settings, updateSettings } = useSettings();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: settings,
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    updateSettings(data);
    navigate('/'); 
  };

  const formGroupStyle = { marginBottom: '15px', textAlign: 'left' };

  return (
    <GameLayout title="Налаштування гри">
      <form onSubmit={handleSubmit(onSubmit)}>
         <div style={formGroupStyle}>
          <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Час на гру (сек)</label>
          <input type="number" {...register("timeLimit")} style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}} />
          <p style={{color: 'red', fontSize: '12px'}}>{errors.timeLimit?.message}</p>
        </div>

        <div style={formGroupStyle}>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Складність</label>
            <select {...register("difficulty")} style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}>
                <option value="normal">Нормальна</option>
                <option value="hard">Важка</option>
                <option value="expert">Експерт 🔥</option>
            </select>
        </div>

         <div style={{ ...formGroupStyle, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" {...register("allowHints")} id="hints" />
          <label htmlFor="hints" style={{ margin: 0 }}>Дозволити підказки</label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
           <Button variant="secondary" onClick={() => navigate('/')} type="button">Назад</Button>
           <Button type="submit">Зберегти</Button>
        </div>
      </form>
    </GameLayout>
  );
};

export default SettingsPage;