package br.com.bandtec.projetojpa02.repositorio;


import br.com.bandtec.projetojpa02.dominio.Musica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicaRepository extends JpaRepository<Musica, Integer> {
}
