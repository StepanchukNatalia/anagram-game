import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import { useSettingsStore } from '../store/useSettingsStore';

const schema = yup.object({
    timeLimit: yup.number().typeError('Має бути числом').positive().min(10).max(300).required(),
    difficulty: yup.string().required(),
    allowHints: yup.boolean()
}).required();

const SettingsPage = () => {
  const navigate = useNavigate();

  const { timeLimit, difficulty, allowHints, setSettings } = useSettingsStore();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { timeLimit, difficulty, allowHints },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setSettings(data);
    navigate('/'); 
  };

  const formGroupStyle = { marginBottom: '15px', textAlign: 'left' };
  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#e0e7ff' };
  const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };

  return (
      <GameLayout title="Налаштування гри">
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              
              <div style={formGroupStyle}>
                <label style={labelStyle}>Час на гру (сек)</label>
                <input 
                    type="number" 
                    {...register("timeLimit")} 
                    style={inputStyle} 
                />
                <p style={{color: 'salmon', fontSize: '12px', marginTop: '5px'}}>{errors.timeLimit?.message}</p>
              </div>

              <div style={formGroupStyle}>
                  <label style={labelStyle}>Складність</label>
                  <select {...register("difficulty")} style={inputStyle}>
                      <option value="normal">Нормальна</option>
                      <option value="hard">Важка</option>
                      <option value="expert">Експерт 🔥</option>
                  </select>
              </div>

               <div style={{ ...formGroupStyle, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                    type="checkbox" 
                    {...register("allowHints")} 
                    id="hints" 
                    style={{ width: '20px', height: '20px' }}
                />
                <label htmlFor="hints" style={{ margin: 0, color: '#e0e7ff' }}>Дозволити підказки</label>
              </div>

               <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                <Button variant="secondary" onClick={() => navigate('/')} type="button">Назад</Button>
                <Button type="submit">Зберегти</Button>
               </div>
          </form>
      </GameLayout>
  );
};

export default SettingsPage;