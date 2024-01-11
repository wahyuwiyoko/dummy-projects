package com.example.barvolume

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity(), View.OnClickListener {
    private lateinit var edtWidth: EditText
    private lateinit var edtHeight: EditText
    private lateinit var edtLength: EditText
    private lateinit var btnCalculate: Button
    private lateinit var tvResult: TextView

    companion object {
        private const val STATE_RESULT = "state_result"
    }

    private fun initComponents() {
        edtWidth = findViewById(R.id.edt_width)
        edtHeight = findViewById(R.id.edt_height)
        edtLength = findViewById(R.id.edt_length)
        btnCalculate = findViewById(R.id.btn_calculate)
        tvResult = findViewById(R.id.tv_result)

        btnCalculate.setOnClickListener(this)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initComponents()

        if (savedInstanceState != null) {
            val result = savedInstanceState.getString(STATE_RESULT)
            tvResult.text = result
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        outState.putString(STATE_RESULT, tvResult.text.toString())
    }

    private fun emptyFieldMessage(field: String): String = "$field field cannot be empty!"

    override fun onClick(view: View?) {
        if (view?.id == R.id.btn_calculate) {
            val inputWidth = edtWidth.text.toString().trim()
            val inputHeight = edtHeight.text.toString().trim()
            val inputLength = edtLength.text.toString().trim()
            var isEmptyField = false

            if (inputWidth.isEmpty()) {
                isEmptyField = true
                edtWidth.error = emptyFieldMessage("Width")
            }

            if (inputHeight.isEmpty()) {
                isEmptyField = true
                edtHeight.error = emptyFieldMessage("Height")
            }

            if (inputLength.isEmpty()) {
                isEmptyField = true
                edtLength.error = emptyFieldMessage("Length")
            }

            if (!isEmptyField) {
                val volume = inputWidth.toDouble() * inputHeight.toDouble() * inputLength.toDouble()
                tvResult.text = volume.toString()
            }
        }
    }
}