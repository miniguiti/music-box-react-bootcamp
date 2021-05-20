package br.com.bandtec.projetojpa02.controle;

import br.com.bandtec.projetojpa02.dominio.Musica;
import br.com.bandtec.projetojpa02.repositorio.MusicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/music")
public class MusicaController {

    @Autowired
    private MusicaRepository repository;

    @CrossOrigin
    @GetMapping
    public ResponseEntity getMusicas() {
        List<Musica> musicas = repository.findAll();
        if (musicas.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(200).body(musicas);
        }
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getMusica(@PathVariable int id) {
        if (id <=0 ) {
            return ResponseEntity.badRequest().body("O id deve ser maior que 0");
        }

        return ResponseEntity.of(repository.findById(id));
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity postMusica(@RequestBody Musica novaMusica) {
        repository.save(novaMusica);
        System.out.println("Inseriu uma música!");
        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteMusica(@PathVariable int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }


    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putMusica(@PathVariable int id, @RequestBody Musica musicaAlterada) {
        if (repository.existsById(id)) {
            musicaAlterada.setId(id);
            repository.save(musicaAlterada);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

}
