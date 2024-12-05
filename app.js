
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://crmcqshdluxfhhigwxlh.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
// Función para agregar una reserva a la base de datos
async function addReservation(data) {
  const { data: reservation, error } = await supabase
    .from('reservations')
    .insert([
      {
        name: data.name,
        email: data.email,
        destination: data.destination,
        date: data.date,
      },
    ]);

  if (error) {
    console.error('Error al guardar reserva:', error);
    return;
  }

  console.log('Reserva guardada:', reservation);
}

document.getElementById('flightForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Obtener los datos del formulario
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      destination: document.getElementById('destination').value,
      date: document.getElementById('date').value,
    };
  
    // Llamar a la función para agregar la reserva a Supabase
    await addReservation(data);
  });
  