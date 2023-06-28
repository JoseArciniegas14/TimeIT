package com.time.timeit

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth

class LoginActivity : AppCompatActivity() {
    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        // Inicializar Firebase Authentication
        auth = FirebaseAuth.getInstance()

        val loginButton: Button = findViewById(R.id.loginButton)
        loginButton.setOnClickListener {
            val emailEditText: EditText = findViewById(R.id.emailEditText)
            val passwordEditText: EditText = findViewById(R.id.passwordEditText)
            val loginStatusTextView: TextView = findViewById(R.id.loginStatusTextView)

            val email = emailEditText.text.toString()
            val password = passwordEditText.text.toString()

            // Iniciar sesión con Firebase Authentication
            auth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(this) { task ->
                    if (task.isSuccessful) {
                        // Inicio de sesión exitoso, redirigir a la pantalla principal
                        val intent = Intent(this, MainActivity::class.java)
                        startActivity(intent)
                        finish()
                    } else {
                        // Error en el inicio de sesión, mostrar mensaje de error
                        val errorMessage = task.exception?.message
                        loginStatusTextView.text = errorMessage
                    }
                }
        }

        val registerButton: Button = findViewById(R.id.registerButton)
        registerButton.setOnClickListener {
            val emailEditText: EditText = findViewById(R.id.emailEditText)
            val passwordEditText: EditText = findViewById(R.id.passwordEditText)
            val registrationStatusTextView: TextView = findViewById(R.id.registrationStatusTextView)

            val email = emailEditText.text.toString()
            val password = passwordEditText.text.toString()

            // Registrar nuevo usuario con Firebase Authentication
            auth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this) { task ->
                    if (task.isSuccessful) {
                        // Registro exitoso, redirigir a la pantalla principal
                        val intent = Intent(this, MainActivity::class.java)
                        startActivity(intent)
                        finish()
                    } else {
                        // Error en el registro, mostrar mensaje de error
                        val errorMessage = task.exception?.message
                        registrationStatusTextView.text = errorMessage
                    }
                }
        }
    }
}
