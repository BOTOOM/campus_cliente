export let FORM_ADMISION = {
    titulo: 'Admision',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Admision',
    campos: [
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Id',
        label_i18n: 'id',
        placeholder_i18n: 'id',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Aspirante',
        label_i18n: 'aspirante',
        placeholder_i18n: 'aspirante',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'ProgramaAcademico',
        label_i18n: 'programa_academico',
        placeholder_i18n: 'programa_academico',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'ReciboMatricula',
        label_i18n: 'recibo_matricula',
        placeholder_i18n: 'recibo_matricula',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'ReciboInscripcion',
        label_i18n: 'recibo_inscripcion',
        placeholder_i18n: 'recibo_inscripcion',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Periodo',
        label_i18n: 'periodo',
        placeholder_i18n: 'periodo',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Propuesta',
        label_i18n: 'propuesta',
        placeholder_i18n: 'propuesta',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'EstadoAdmision',
        label_i18n: 'estado_admision',
        placeholder_i18n: 'estado_admision',
        requerido: true,
        tipo: 'EstadoAdmision',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'LineaInvestigacion',
        label_i18n: 'linea_investigacion',
        placeholder_i18n: 'linea_investigacion',
        requerido: true,
        tipo: 'LineaInvestigacion',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Enfasis',
        label_i18n: 'enfasis',
        placeholder_i18n: 'enfasis',
        requerido: true,
        tipo: 'Enfasis',
        key: 'Nombre',
        opciones: [],
    },
    ],
}
