package com.proyecto.springproject.modulos.cine.dto;

import com.proyecto.springproject.modelos.Sala;

import java.sql.Timestamp;
import java.util.List;

public class SalaDTO {
    private Integer salaID;
    private Short num_sala;
    private Integer asientos;
    private Timestamp fecha_alta;
    private Timestamp fecha_modificacion;
    private Boolean registro_activo;


    public SalaDTO(List<Sala> sala){
        super();
    }

    public SalaDTO(Integer salaID, Short num_sala, Integer asientos, Timestamp fecha_alta, Timestamp fecha_modificacion, Boolean registro_activo) {
        this.salaID = salaID;
        this.num_sala = num_sala;
        this.asientos = asientos;
        this.fecha_alta = fecha_alta;
        this.fecha_modificacion = fecha_modificacion;
        this.registro_activo = registro_activo;
    }

    public Integer getSalaID() {
        return salaID;
    }

    public void setSalaID(Integer salaID) {
        this.salaID = salaID;
    }

    public Short getNum_sala() {
        return num_sala;
    }

    public void setNum_sala(Short num_sala) {
        this.num_sala = num_sala;
    }

    public Integer getAsientos() {
        return asientos;
    }

    public void setAsientos(Integer asientos) {
        this.asientos = asientos;
    }

    public Timestamp getFecha_alta() {
        return fecha_alta;
    }

    public void setFecha_alta(Timestamp fecha_alta) {
        this.fecha_alta = fecha_alta;
    }

    public Timestamp getFecha_modificacion() {
        return fecha_modificacion;
    }

    public void setFecha_modificacion(Timestamp fecha_modificacion) {
        this.fecha_modificacion = fecha_modificacion;
    }

    public Boolean getRegistro_activo() {
        return registro_activo;
    }

    public void setRegistro_activo(Boolean registro_activo) {
        this.registro_activo = registro_activo;
    }
}
