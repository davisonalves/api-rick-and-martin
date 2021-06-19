import * as POSTListarEps from '../requests/POSTListarEps'
import * as POSTListaLocs from '../requests/POSTListarLocs'

describe('Rick And Morty', () => {
    it('Lista a primeira página de episódios', () => {
        POSTListarEps.listaEpisodios().should((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.data.episodes.results).to.have.lengthOf(20);
        });
    });
    it('Lista um único episódio', () => {
        POSTListarEps.listaEpisodio("A Rickle in Time").should((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.data.episodes.results).to.have.lengthOf(1);
            expect(response.body.data.episodes.results[0].name).to.be.eq("A Rickle in Time");
        });
    });
    it('Lista todos as localizacoes', () => {
        POSTListaLocs.listarLocalizacoes().should((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.data.locations.results).to.have.lengthOf(20);
        });
    });
    it('Lista uma única localizacao', () => {
        POSTListaLocs.listarLocalizacao("Mr. Goldenfold's dream").should((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.data.locations.results).to.have.lengthOf(1);
            expect(response.body.data.locations.results[0].name).to.be.eq("Mr. Goldenfold's dream");
        });
    });
});