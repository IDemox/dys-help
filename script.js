<script> 
function modifPdf(src)
    {
     // Créer l'objet qui permet de manipuler un PDF
     var pdf = new ActiveXObject('AcroExch.PDDoc');
     // Variables
     var pdfJS;
     var annot;
     var props;
     
     var page;
     var rectSize = new Array();
     // Ouverture du PDF
     pdf.Open(src);
     page = pdf.AcquirePage(0);
     page = page.GetSize()
     rectSize[0] = 25;
     rectSize[1] = page.y - 50;
     rectSize[2] = page.x - 25;
     rectSize[3] = page.y - 25;
     // Obtenir le javascript du PDF
     pdfJS = pdf.GetJSObject();
     // Ajout de l'annotation
     // L'annotation est crée, mais elle n'est pas positionnée (rect n'est pas pris en compte)
     pdfJS.addAnnot({page: 0,type: 'FreeText',rect: rectSize,author: 'SA',contents: 'Test'});
     pdfJS.addAnnot({page: 0,type: 'FreeText',rect: [25,742,1199,767],author: 'SA',contents: 'Test'});
     pdfJS.addAnnot({page: 0,type: 'FreeText',rect: new Array(25,742,1199,767), author: 'SA',contents: 'Test'});
     // Impression
     printParams = pdfJS.getPrintParams();
     printParams.interactive = -1;
     printParams.firstPage = 0;
     printParams.pageHandling = printParams.constants.handling.fit;
     //pdfJS.print(printParams);
     // Je save sur mon disque dur à place d'imprimer pour les tests
     pdf.Save(1, "C:/Tempo/test.pdf" );
     pdf.Close();
    }
</script>