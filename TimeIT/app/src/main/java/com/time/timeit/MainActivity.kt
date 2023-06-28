package com.time.timeit

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser

class MainActivity : AppCompatActivity() {
    private lateinit var auth: FirebaseAuth
    private lateinit var alarmsContainer: LinearLayout
    private lateinit var alarmTimeEditText: EditText

    private var alarms = mutableListOf<Alarm>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Inicializar Firebase Authentication
        auth = FirebaseAuth.getInstance()

        // Obtener referencias a las vistas
        alarmsContainer = findViewById(R.id.alarmsContainer)
        alarmTimeEditText = findViewById(R.id.alarmTimeEditText)

        // Establecer el evento clic del botón "Guardar"
        val saveButton: Button = findViewById(R.id.saveButton)
        saveButton.setOnClickListener {
            saveAlarm()
        }

        // Verificar si el usuario ha iniciado sesión
        val currentUser: FirebaseUser? = auth.currentUser
        if (currentUser == null) {
            // Si no ha iniciado sesión, redirigir a la pantalla de inicio de sesión
            goToLogin()
        } else {
            // Si el usuario ha iniciado sesión, cargar las alarmas
            loadAlarms()
        }
    }

    // Función para guardar una nueva alarma
    private fun saveAlarm() {
        val alarmTime = alarmTimeEditText.text.toString()

        if (alarmTime.isNotEmpty()) {
            val newAlarm = Alarm(System.currentTimeMillis(), alarmTime)
            alarms.add(newAlarm)
            renderAlarms()
            clearForm()
        }
    }

    // Función para renderizar las alarmas en el contenedor
    private fun renderAlarms() {
        alarmsContainer.removeAllViews()

        for (alarm in alarms) {
            val alarmView = LayoutInflater.from(this).inflate(R.layout.alarm_item, null)
            val timeTextView: TextView = alarmView.findViewById(R.id.timeTextView)
            val editButton: Button = alarmView.findViewById(R.id.editButton)
            val deleteButton: Button = alarmView.findViewById(R.id.deleteButton)

            timeTextView.text = alarm.time
            editButton.setOnClickListener {
                editAlarm(alarm)
            }
            deleteButton.setOnClickListener {
                deleteAlarm(alarm)
            }

            alarmsContainer.addView(alarmView)
        }
    }

    // Función para editar una alarma
    private fun editAlarm(alarm: Alarm) {
        val index = alarms.indexOf(alarm)

        if (index != -1) {
            val updatedTime = alarm.time // Obtener el nuevo tiempo de alguna manera (por ejemplo, con un cuadro de diálogo)
            alarms[index].time = updatedTime
            renderAlarms()
        }
    }

    // Función para eliminar una alarma
    private fun deleteAlarm(alarm: Alarm) {
        alarms.remove(alarm)
        renderAlarms()
    }

    // Función para limpiar el formulario de agregar alarma
    private fun clearForm() {
        alarmTimeEditText.text.clear()
    }

    // Función para cargar las alarmas
    private fun loadAlarms() {
        // Implementa la lógica para cargar las alarmas desde una base de datos o cualquier otra fuente de datos
        // y actualizar la lista "alarms" en consecuencia. Luego, llama a "renderAlarms()" para mostrar las alarmas en la pantalla.
    }

    // Función para redirigir a la pantalla de inicio de sesión
    private fun goToLogin() {
        val intent = Intent(this, LoginActivity::class.java)
        startActivity(intent)
        finish()
    }
}

// Clase de modelo para representar una alarma
data class Alarm(val id: Long, var time: String)
