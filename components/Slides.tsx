import React from 'react';
import { SlideProps } from '../types';
import { 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  Terminal,
  FileText, 
  Layers, 
  User, 
  Bug, 
  Server,
  Globe,
  Brain,
  Zap
} from 'lucide-react';

// --- Slide 1: Title ---
export const TitleSlide: React.FC<SlideProps> = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl animate-fade-in gap-8">
    
    {/* Text Content */}
    <div className="flex-1 text-left space-y-6 z-10">
      <div className="mb-4">
        {/* UNRN Logo Simulation */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl font-black tracking-tighter text-unrn-red">UNRN</h2>
          <div className="h-10 w-px bg-slate-500"></div>
          <div className="text-left text-sm text-slate-300 font-semibold leading-tight">
            Universidad Nacional<br/>de Río Negro
          </div>
        </div>
        <p className="text-slate-400 tracking-widest text-sm uppercase">Licenciatura en Sistemas</p>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-tight drop-shadow-lg">
        Prácticas Recomendadas para un Desarrollo Eficiente de<br/>
        <span className="text-unrn-red italic">"Vibe Coding"</span>
      </h1>

      <div className="flex flex-col gap-2 mt-8 text-slate-300">
        <div>
          <span className="text-xs text-slate-500 uppercase font-bold mr-2">Autor:</span>
          <span className="text-lg font-semibold">Antual, Adrian Tomas</span>
        </div>
        <div>
          <span className="text-xs text-slate-500 uppercase font-bold mr-2">Director:</span>
          <span className="text-lg font-semibold">Molinari, Enrique Pablo</span>
        </div>
        <div className="mt-4 text-slate-500 font-mono text-sm">
          Viedma, Río Negro • 2025
        </div>
      </div>
    </div>

    {/* Hero Image */}
    <div className="flex-1 relative flex justify-center items-center">
      <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-tr from-unrn-red/20 to-blue-500/20 mix-blend-overlay z-10"></div>
        {/* Placeholder for the image of the boy and robot */}
        <img 
          src={`${import.meta.env.BASE_URL || '/'}imagenes/Gemini_Generated_Image_izliryizliryizli.png`} 
          alt="Vibe Coding Illustration" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            // Fallback if image not found
            e.currentTarget.src = 'https://picsum.photos/seed/vibe/800/800';
          }}
        />
      </div>
    </div>
  </div>
);

// --- Slide 2: Agenda ---
export const AgendaSlide: React.FC<SlideProps> = () => (
  <div className="w-full max-w-5xl animate-fade-in">
    <h2 className="text-4xl font-bold mb-12 border-b border-unrn-red pb-4 inline-block">Agenda</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        "Introducción: ¿Qué es Vibe Coding?",
        "Objetivos del Trabajo",
        "Herramienta Seleccionada",
        "Caso de Estudio: Classiclick",
        "Las 7 Prácticas del Proceso",
        "Buenas Prácticas Reales",
        "Problemas y Riesgos de la IA",
        "Conclusión Final"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-4 p-6 bg-card-bg rounded-xl border border-slate-800 hover:border-unrn-red/50 transition-colors group">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-unrn-red font-bold font-mono group-hover:bg-unrn-red group-hover:text-white transition-colors">
            {idx + 1}
          </span>
          <span className="text-lg font-medium">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Slide 3: Intro ---
export const IntroSlide: React.FC<SlideProps> = () => (
  <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in relative">
     {/* Background decorative elements */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
     </div>

    <div className="z-10 flex flex-col items-center gap-6 max-w-4xl w-full px-4">
      <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
        Vibe Coding
      </h2>
      
      {/* Tweet Container */}
      <div className="relative group w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-700 p-6">
          {/* Tweet Header */}
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              AK
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Andrej Karpathy</span>
                <span className="text-blue-400 text-sm">@karpathy</span>
                <span className="text-slate-500 text-sm">• 2 feb 2025</span>
              </div>
            </div>
          </div>

          {/* Tweet Content */}
          <div className="text-slate-200 text-base leading-relaxed space-y-3 mb-4">
            <p>
              Hay un nuevo tipo de programación que llamo <strong className="text-blue-400">"vibe coding"</strong>, donde te entregás completamente a la vibra, abrazás lo exponencial y te olvidás de que el código siquiera existe. Esto es posible porque los LLMs (por ejemplo, Cursor Composer con Sonnet) ya son demasiado buenos.
            </p>
            <p>
              Además, hablo con Composer usando SuperWhisper, así que casi ni toco el teclado. Pido las cosas más tontas, como "reducí el padding de la barra lateral a la mitad", porque me da pereza buscarlo. Siempre le doy a <strong className="text-green-400">"Accept All"</strong>, ya ni leo los diffs.
            </p>
            <p>
              Cuando me aparecen mensajes de error simplemente los copio y pego sin ningún comentario, y la mayoría de las veces eso lo arregla. El código crece más allá de mi comprensión habitual, tendría que sentarme a leerlo bastante para entenderlo.
            </p>
            <p>
              A veces los LLMs no logran corregir un bug, entonces lo esquivo o pido cambios aleatorios hasta que desaparece. No está tan mal para proyectos descartables de fin de semana, pero sigue siendo bastante divertido.
            </p>
            <p className="italic text-slate-400">
              "Estoy armando un proyecto o una webapp, pero en realidad no es programar: solo miro cosas, digo cosas, corro cosas y copio/pego cosas, y la mayoría de las veces funciona."
            </p>
          </div>

          {/* Tweet Footer */}
          <div className="flex items-center gap-6 text-slate-500 text-sm pt-4 border-t border-slate-700">
            <div className="flex items-center gap-2">
              <span>👁</span>
              <span>5.1M</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💬</span>
              <span>1K</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔄</span>
              <span>5K</span>
            </div>
            <div className="flex items-center gap-2">
              <span>❤️</span>
              <span>30K</span>
            </div>
          </div>

          {/* Link */}
          <div className="mt-4 pt-4 border-t border-slate-700">
            <a 
              href="https://x.com/karpathy/status/1886192184808149383" 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors"
            >
              x.com/karpathy/status/1886192184808149383
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Slide 4: Objectives ---
export const ObjectivesSlide: React.FC<SlideProps> = () => (
  <div className="w-full max-w-6xl animate-slide-up">
    <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
      <Target className="text-unrn-red" size={40} />
      Objetivos
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* General Objective - UPDATED TO GREEN */}
      <div className="md:col-span-3 bg-gradient-to-r from-emerald-500/10 to-transparent p-8 rounded-2xl border-l-4 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        <h3 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-2">Objetivo General</h3>
        <p className="text-2xl font-light leading-relaxed text-slate-100">
          Establecer un conjunto de <span className="font-bold text-emerald-400">prácticas recomendadas</span> que permitan aprovechar herramientas de desarrollo asistido por IA de forma <span className="font-bold text-emerald-400">eficiente y replicable</span>.
        </p>
      </div>

      {/* Specific Objectives */}
      {[
        { icon: <CheckCircle className="text-emerald-400" />, text: "Investigar herramientas de desarrollo asistidas por IA." },
        { icon: <CheckCircle className="text-emerald-400" />, text: "Indagar nuevas terminologías y enfoques." },
        { icon: <CheckCircle className="text-emerald-400" />, text: "Seleccionar herramientas para relevar (Cursor, GitHub Copilot)." },
        { icon: <CheckCircle className="text-emerald-400" />, text: "Desarrollar una aplicación web real (Caso de Estudio)." },
        { icon: <CheckCircle className="text-emerald-400" />, text: "Extraer y documentar la experiencia práctica." }
      ].map((obj, i) => (
        <div key={i} className="bg-card-bg p-6 rounded-xl border border-slate-800 flex flex-col gap-4 hover:bg-slate-800 transition-colors hover:border-emerald-500/30">
          <div className="p-2 bg-slate-900 w-fit rounded-lg">{obj.icon}</div>
          <p className="text-slate-300">{obj.text}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Slide 5: Tool ---
export const ToolSlide: React.FC<SlideProps> = () => (
  <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in bg-gradient-to-b from-dark-bg to-black">
    <div className="relative w-full flex flex-col items-center">
      <div className="absolute -inset-20 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
      
      {/* Dynamic GIF Logo */}
      <div className="relative z-10 mb-12">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.3)] border border-slate-700/50 bg-black">
          <img 
            src={`${import.meta.env.BASE_URL || '/'}imagenes/cursorImg.gif`} 
            alt="Cursor Logo Animation"
            className="w-full h-full object-cover"
            onError={(e) => {
                // Fallback UI if image missing
                const container = e.currentTarget.parentElement;
                if (container) {
                    container.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center flex-col bg-black text-white p-4 text-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-20 h-20 mb-4 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        <span class="text-xs font-mono text-slate-500">GIF not found<br/>imagenes/cursorImg.gif</span>
                    </div>`;
                }
            }}
          />
        </div>
      </div>

      <h2 className="text-7xl font-bold text-white tracking-tight drop-shadow-lg">Cursor</h2>
      <p className="text-2xl text-slate-400 mt-4 font-light">The AI Code Editor</p>
      
      <div className="mt-12 flex gap-4 text-sm font-mono text-slate-500">
        <span className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-700">VS Code Fork</span>
        <span className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-700">Composer</span>
        <span className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-700">Privacy Mode</span>
      </div>
    </div>
  </div>
);

// --- Slide 6: Case Study ---
export const CaseStudySlide: React.FC<SlideProps> = () => (
  <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center animate-slide-up">
    <div className="flex-1 space-y-6">
      <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Caso de Estudio</div>
      <h2 className="text-5xl font-bold">Classiclick</h2>
      <p className="text-xl text-slate-300 leading-relaxed">
        Una aplicación web de clasificados online completa. Desarrollada para poner a prueba la hipótesis del "Vibe Coding" en un escenario real, no trivial.
      </p>
      
      <div className="space-y-4 pt-6">
        <div className="flex items-center gap-4 bg-card-bg p-4 rounded-lg border border-slate-700">
          <Server className="text-green-400" />
          <div>
            <span className="block font-bold text-white">Backend</span>
            <span className="text-sm text-slate-400">Java Spring Boot + PostgreSQL</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-card-bg p-4 rounded-lg border border-slate-700">
          <Globe className="text-blue-400" />
          <div>
            <span className="block font-bold text-white">Frontend</span>
            <span className="text-sm text-slate-400">React + Vite + Tailwind</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-card-bg p-4 rounded-lg border border-slate-700">
          <Brain className="text-purple-400" />
          <div>
            <span className="block font-bold text-white">Metodología</span>
            <span className="text-sm text-slate-400">Vibe Coding 100% Asistido</span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex-1 h-96 w-full relative">
       {/* Video Container with Browser/IDE Style */}
       <div className="absolute inset-0 bg-slate-800 rounded-xl overflow-hidden border border-slate-600 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
          <div className="bg-slate-900 h-8 flex items-center px-4 gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="relative w-full h-full bg-black">
            <video 
              src={`${import.meta.env.BASE_URL || '/'}imagenes/classiclickpagina.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                const container = e.currentTarget.parentElement;
                if (container) {
                  container.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center flex-col bg-slate-900 text-white p-4 text-center">
                      <span class="text-xs font-mono text-slate-500">Video not found<br/>imagenes/classiclickpagina.mp4</span>
                    </div>`;
                }
              }}
            />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-unrn-red bg-black/50 px-2 py-1 rounded">classiclick.app</div>
          </div>
       </div>
    </div>
  </div>
);

// Componente para mostrar iconos de tecnologías
const TechIcons: React.FC = () => (
  <div className="flex items-center justify-center gap-6">
    <div className="flex flex-col items-center gap-2">
      <img src={`${import.meta.env.BASE_URL || '/'}imagenes/springLogo.png`} alt="Spring Boot" className="w-16 h-16 object-contain" />
      <span className="text-xs text-slate-400 font-mono">Spring</span>
    </div>
    <div className="text-slate-600 text-2xl">→</div>
    <div className="flex flex-col items-center gap-2">
      <img src={`${import.meta.env.BASE_URL || '/'}imagenes/angularLogo.png`} alt="Angular" className="w-16 h-16 object-contain" />
      <span className="text-xs text-slate-400 font-mono">Angular</span>
    </div>
    <div className="text-slate-600 text-2xl">→</div>
    <div className="flex flex-col items-center gap-2">
      <Terminal size={32} className="text-green-400" />
      <span className="text-xs text-slate-400 font-mono">Cursor</span>
    </div>
  </div>
);

// Componente para mostrar Reglas y MCP de forma visual
const RulesAndMCPContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'reglas' | 'mcp'>('reglas');
  
  const reglasCategories = [
    {
      title: "General",
      items: ["Código limpio y documentado", "Nomenclatura: PascalCase, camelCase, ALL_CAPS", "Principios SOLID"]
    },
    {
      title: "Modelo",
      items: ["Construcción por constructor", "Validaciones con assert{Condición}", "Inmutabilidad y Tell, don't ask"]
    },
    {
      title: "Servicios",
      items: ["Un servicio = un agregado", "Orquestadores delgados", "Mapeo DTOs", "@Transactional"]
    },
    {
      title: "Controladores",
      items: ["RESTful design", "Solo ResponseDTOs", "@ControllerAdvice", "Seguridad global"]
    },
    {
      title: "Repositorios",
      items: ["Solo acceso a datos", "JpaRepository", "Nombres descriptivos", "Sin lógica de negocio"]
    },
    {
      title: "Testing",
      items: ["JUnit 5.13", "Sin mocks (excepto externos)", "Estructura: Setup → Ejercitación → Verificación", "Casos límites"]
    }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('reglas')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'reglas'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Reglas de Código
        </button>
        <button
          onClick={() => setActiveTab('mcp')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'mcp'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          MCP (Context7)
        </button>
      </div>

      {/* Content */}
      {activeTab === 'reglas' ? (
        <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
          {reglasCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h4 className="text-lg font-bold text-unrn-red mb-3">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Globe className="text-blue-400" size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Context7 MCP</h4>
              <p className="text-sm text-slate-400">Model Context Protocol</p>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Servicio en línea que proporciona contexto adicional desde una API externa. 
            Permite enriquecer al agente con información de referencia alojada fuera del proyecto local.
          </p>
          <div className="bg-black/50 p-4 rounded-lg border border-slate-700 font-mono text-sm">
            <div className="text-green-400">"context7": {`{`}</div>
            <div className="ml-4 text-slate-300">
              <div>"url": <span className="text-blue-400">"https://mcp.context7.com/mcp"</span></div>
            </div>
            <div className="text-green-400">{`}`}</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para mostrar la Generación del PRD
const PRDContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'estructura' | 'prompt' | 'ejemplo'>('estructura');
  
  const promptStructure = [
    {
      section: "[Contexto del sistema]",
      desc: "Introduce el sistema sobre el cual se va a trabajar. Debe explicar con claridad qué sistema queremos obtener: su propósito, alcance y restricciones.",
      tip: "Cuanto más detallado y concreto, mejor resultado"
    },
    {
      section: "[Rol asignado a la IA]",
      desc: "Define desde qué perspectiva trabajará la IA. Para un PRD, el rol natural es el Project Manager.",
      tip: "Quien traduce necesidades en requisitos"
    },
    {
      section: "[Tarea principal]",
      desc: "La instrucción central, lo que se espera que haga la IA. Se establece claramente el objetivo para evitar ambigüedades.",
      tip: "Analizar y transformar en PRD"
    },
    {
      section: "[Contenido requerido]",
      desc: "Especifica qué secciones debe incluir el PRD: Historias de usuario, Criterios de aceptación, Preguntas de aclaración.",
      tip: "Elementos mínimos necesarios"
    },
    {
      section: "[Reglas de interacción]",
      desc: "Define cómo debe comportarse la IA si encuentra vacíos o contradicciones. Debe preguntar antes de inventar datos.",
      tip: "Preguntar antes de inventar"
    },
    {
      section: "[Formato de entrega]",
      desc: "Indica cómo debe presentarse el PRD. Archivo Markdown en docs/, con nombre estandarizado (ej: docs/prd.md).",
      tip: "Estructura interna definida"
    },
    {
      section: "[Restricciones]",
      desc: "Fija los límites. La IA NO debe generar código, solo el documento. NO debe agregar explicaciones fuera del PRD.",
      tip: "Solo documento, sin código"
    }
  ];

  const fullPrompt = `"[Descripción del sistema que se desea realizar.]

[Rol asignado a la IA] Sos el project manager de esta aplicación. [Tarea principal] Tu tarea es analizar el sistema descrito arriba y convertir los requisitos de usuario en un documento de requisitos de producto (PRD) [Contenido requerido] que incluyan historias de usuario para nuevas funcionalidades. Añade criterios de aceptación. [Reglas de interacción] Si no tienes suficiente información, pregúntame sobre la funcionalidad. [Formato de entrega] Inserta el diseño en un archivo Markdown en el directorio docs del repositorio. El nombre del archivo debe ser [nombre del sistema]-prd.md. El archivo debe estar formateado en Markdown e incluir encabezados y viñetas. [Restricciones] No codifiques nada, solo crea el documento y guardalo para futuras consultas."`;

  const prdExample = `# Classiclick - Product Requirements Document (PRD)

## 1. Visión General del Producto

### 1.1 Descripción
Classiclick es una aplicación web de clasificados en línea que permite a los usuarios publicar, gestionar y consultar avisos clasificados organizados por categorías.

### 1.2 Objetivos del Producto
- Proporcionar una plataforma accesible para la publicación y consulta de clasificados
- Facilitar la gestión de avisos por parte de vendedores
- Garantizar la calidad del contenido mediante un sistema de aprobación
- Organizar los clasificados mediante un sistema de categorías

## 2. Usuarios y Roles

### 2.1 Tipos de Usuario
- **Visitante (No Autenticado)**: Puede visualizar clasificados activos
- **Vendedor**: Usuario registrado que puede gestionar sus clasificados
- **Administrador**: Puede aprobar/rechazar clasificados y gestionar categorías

## 3. Entidades del Sistema

### 3.1 Clasificado
- Título, Descripción, Precio
- Estado: ACTIVO, VENDIDO, PENDIENTE, DESACTIVADO
- Vendedor y Categoría asociada

## 4. Historias de Usuario

### HU-001: Como visitante, quiero ver todos los clasificados activos disponibles
**Prioridad:** Alta
**Criterios de Aceptación:**
- Los clasificados con estado ACTIVO son visibles
- Se muestra información completa de cada clasificado
- Los visitantes pueden navegar por categorías`;

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('estructura')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'estructura'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Estructura
        </button>
        <button
          onClick={() => setActiveTab('prompt')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'prompt'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Prompt Completo
        </button>
        <button
          onClick={() => setActiveTab('ejemplo')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'ejemplo'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          PRD Ejemplo
        </button>
      </div>

      {/* Content */}
      {activeTab === 'estructura' ? (
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {promptStructure.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-unrn-red">
              <h4 className="text-base font-bold text-unrn-red mb-2">{item.section}</h4>
              <p className="text-sm text-slate-300 mb-1">{item.desc}</p>
              <p className="text-xs text-slate-500 italic">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      ) : activeTab === 'prompt' ? (
        <div className="bg-black/50 p-6 rounded-lg border border-slate-700">
          <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
            {fullPrompt}
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 max-h-96 overflow-y-auto">
          <div className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
            {prdExample}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para mostrar las Especificaciones Técnicas
const SpecsTecnicasContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'estructura' | 'prompt' | 'ejemplo'>('estructura');
  
  const promptStructure = [
    {
      section: "[Contexto del sistema]",
      desc: "Explica el punto de partida: el PRD ya fue generado y contiene los requisitos funcionales. Ahora se requiere traducir ese documento en un diseño técnico detallado.",
      tip: "Foco en cómo se implementará el sistema"
    },
    {
      section: "[Rol asignado a la IA]",
      desc: "Define que la IA debe actuar como Arquitecto de Software, rol encargado de diseñar soluciones técnicas a partir de requisitos funcionales.",
      tip: "Pensar en arquitectura, integración e implementación"
    },
    {
      section: "[Tarea principal]",
      desc: "La IA debe convertir el PRD en un documento técnico que describa cómo se implementará el sistema. Definir arquitectura, entidades, endpoints y relaciones.",
      tip: "Diseño técnico claro, completo y coherente"
    },
    {
      section: "[Contenido requerido]",
      desc: "Debe incluir: Descripción de arquitectura, Pasos de implementación, Puntos de integración, Supuestos explícitos, Referencias a criterios de aceptación.",
      tip: "Cuanto más detallado, mejor resultado"
    },
    {
      section: "[Reglas de interacción]",
      desc: "Si algo en el PRD no está claro, la IA debe preguntar al usuario antes de inventar datos. Si necesita asumir algo, debe dejarlo expresado como suposición explícita.",
      tip: "Preguntar y documentar suposiciones"
    },
    {
      section: "[Formato de entrega]",
      desc: "Archivo Markdown en el directorio docs/ del repositorio. El nombre del archivo puede ser [nombre del sistema]-especificaciones-tec.md.",
      tip: "Estructura con encabezados y viñetas"
    },
    {
      section: "[Restricciones]",
      desc: "La IA no debe generar código fuente en esta etapa. El resultado debe ser únicamente un documento descriptivo y técnico que guíe la implementación.",
      tip: "Solo documento técnico, sin código"
    }
  ];

  const fullPrompt = `"[Rol asignado a la IA] Eres arquitecto de software de esta aplicación. [Contexto del sistema] Tu gerente de producto te proporcionó el PRD adjunto con los requisitos funcionales para un nuevo sistema. [Tarea principal] Tu tarea es diseñar la implementación y garantizar que se cumplan todos los criterios de aceptación. Escanea la base de código actual para encontrar puntos de integración. [Contenido requerido] Crea una guía paso a paso que detalle cómo implementar tu diseño. [Restricciones] NO INCLUYAS CÓDIGO FUENTE. [Reglas de interacción] Si algo no está claro, pregúntame sobre el PRD o la implementación. Si necesitas hacer suposiciones, indícalas claramente. [Formato de entrega] Inserta el diseño en un archivo Markdown en el directorio docs. El archivo debe tener el mismo nombre que el PRD reemplazando prd por especificaciones-tec. El archivo debe estar en Markdown con encabezados y viñetas."`;

  const specsExample = `# Classiclick - Especificaciones Técnicas

## 1. Visión General de la Arquitectura

### 1.1 Stack Tecnológico Confirmado
- **Framework:** Spring Boot 3.5.7
- **Lenguaje:** Java 21
- **Base de Datos:** PostgreSQL
- **Tipo de Aplicación:** API REST
- **Arquitectura:** Aplicación web con arquitectura en capas

### 1.2 Principios Arquitectónicos
- Separación de Responsabilidades
- Inversión de Dependencias
- Domain-Driven Design (DDD)
- RESTful API
- Seguridad por Capas

## 2. Estructura de Capas

### 2.1 Organización del Proyecto
\`\`\`
com.example.classiclick/
├── ClassiclickApplication.java
├── config/              # Configuraciones
├── controller/          # Controladores REST
├── dto/                 # Data Transfer Objects
├── exception/           # Excepciones personalizadas
├── model/               # Entidades del dominio
├── repository/          # Interfaces de acceso a datos
├── service/             # Lógica de negocio
└── util/                # Utilidades
\`\`\`

### 2.2 Responsabilidades por Capa

#### 2.2.1 Capa de Controladores
- Manejar peticiones HTTP y respuestas
- Validar DTOs, delegar a servicios
- Usar verbos HTTP apropiados
- Retornar códigos de estado HTTP correctos

#### 2.2.2 Capa de Servicios
- Orquestar operaciones de negocio
- Invocar métodos del dominio
- Gestionar transacciones (@Transactional)
- Mapear DTOs ↔ Entidades

#### 2.2.3 Capa de Modelo
- Representar entidades del dominio
- Encapsular lógica de negocio
- Validar estados
- Usar "Tell, don't ask"

#### 2.2.4 Capa de Repositorios
- Acceso a datos persistentes
- Extender JpaRepository
- Definir queries personalizadas

## 3. Modelo de Datos

### 3.1 Entidades del Dominio

#### 3.1.1 Usuario
**Campos:**
- id (Long, PK)
- nombre, apellido, correo
- nombreUsuario (único)
- telefono, contraseña (encriptada)
- rol (Enum: VENDEDOR, ADMINISTRADOR)

**Métodos de Negocio:**
- actualizarPerfil()
- cambiarContraseña()
- asignarRol()`;

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('estructura')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'estructura'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Estructura
        </button>
        <button
          onClick={() => setActiveTab('prompt')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'prompt'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Prompt Completo
        </button>
        <button
          onClick={() => setActiveTab('ejemplo')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'ejemplo'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Especificaciones Ejemplo
        </button>
      </div>

      {/* Content */}
      {activeTab === 'estructura' ? (
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {promptStructure.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-unrn-red">
              <h4 className="text-base font-bold text-unrn-red mb-2">{item.section}</h4>
              <p className="text-sm text-slate-300 mb-1">{item.desc}</p>
              <p className="text-xs text-slate-500 italic">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      ) : activeTab === 'prompt' ? (
        <div className="bg-black/50 p-6 rounded-lg border border-slate-700">
          <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
            {fullPrompt}
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 max-h-96 overflow-y-auto">
          <div className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
            {specsExample}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para mostrar el Plan de Ejecución
const PlanEjecucionContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'estructura' | 'prompt' | 'ejemplo'>('estructura');
  
  const promptStructure = [
    {
      section: "[Contexto del sistema]",
      desc: "Establece el punto de partida: ya se cuenta con el PRD y el documento de Especificaciones Técnicas. La necesidad es diseñar un plan detallado que guíe la implementación paso a paso.",
      tip: "Control y trazabilidad en el proceso"
    },
    {
      section: "[Rol asignado a la IA]",
      desc: "La IA debe asumir el rol de Ingeniero en Sistemas, encargado de transformar los documentos de análisis y diseño en un plan estructurado de implementación.",
      tip: "Diseña el plan, no programa todavía"
    },
    {
      section: "[Tarea principal]",
      desc: "Elaborar un plan de trabajo por capas, dividido en etapas y fases, con instrucciones concretas, secuenciales y ejecutables.",
      tip: "Plan que otro rol ejecutará después"
    },
    {
      section: "[Contenido requerido]",
      desc: "Debe incluir: Estructura de carpetas, Etapas de implementación subdivididas en fases, Descripción precisa de qué archivos modificar, Criterios de aceptación. Limitación: máximo 3 archivos por fase.",
      tip: "Instrucciones no ambiguas y finitas"
    },
    {
      section: "[Reglas de interacción]",
      desc: "Destaca la importancia de la revisión y validación humana del plan. El desarrollador debe analizar cuidadosamente y refinar si es necesario.",
      tip: "Interacción continua para refinar"
    },
    {
      section: "[Formato de entrega]",
      desc: "Archivo Markdown en el directorio docs/ del repositorio. El nombre del archivo puede ser [nombre del sistema]-plan-ejecucion.md.",
      tip: "Estructura con encabezados y viñetas"
    },
    {
      section: "[Restricciones]",
      desc: "No se debe generar código en ningún momento, sino únicamente instrucciones precisas que conformen el plan de implementación.",
      tip: "Documento técnico completo y claro"
    }
  ];

  const fullPrompt = `"[Rol asignado a la IA] sos un arquitecto de software, quiero que crees otro archivo en modo de plan, [Contexto del sistema] con el documento PRD y el espec-tec. [Tarea principal] Arma un plan de trabajo por capas que sea minucioso. Es decir, un documento que se lo entreguemos al implementador/desarrollador y que lo vaya ejecutando por capas finitas y bien definidas.[Formato de entrega] este plan va a estar escrito en markdown. El nombre del documento va a ser classiclick-plan-ejecucion.md.[Contenido requerido] en primer lugar, va a definir las estructuras a nivel de carpetas. luego va a definir las etapas según el criterio del ingeniero. Cada etapa podrá contener fases, todas las que considere necesario. [Restricciones] esas etapas NO pueden editar más de 3 archivos. En caso de tener que tocar más de 3 archivos es necesario generar otra fase. Como dije, cada fase debe tener bien especificado que hacer en cada archivo o clase editada, detalles no ambiguos, finitos y precisos. El programador sólo debe hacer lo que dice ahí, ni más ni menos. [Contenido requerido]Es necesario que al comienzo de cada etapa, agregues contexto de lo que se planea hacer en esa etapa. luego, al comienzo de cada fase, también agregar contexto de lo que se debe hacer en esa fase específicamente."`;

  const planExample = `# Classiclick - Plan de Ejecución por Capas

## Documento de Referencia
Este plan de ejecución está basado en:
- **PRD:** classiclick-prd.md v1.1
- **Especificaciones Técnicas:** classiclick-especificaciones-tec.md v1.0
- **Reglas de Desarrollo:** .cursor/rules/*.mdc

## Objetivo
Este documento proporciona un plan de trabajo minucioso y finito para la implementación del proyecto Classiclick. Cada etapa y fase está diseñada para ser ejecutada de forma independiente.

## Reglas de Ejecución
1. **Máximo 3 archivos por fase:** Si una fase requiere editar más de 3 archivos, debe dividirse en múltiples fases.
2. **Ejecución secuencial:** Las etapas deben ejecutarse en el orden especificado.
3. **Fases independientes:** Cada fase debe poder completarse sin depender de fases posteriores.
4. **Instrucciones precisas:** El desarrollador debe seguir exactamente lo indicado.

## 1. Estructura de Carpetas

### 1.1 Estructura Base del Proyecto
\`\`\`
src/main/java/com/example/classiclick/
├── ClassiclickApplication.java
├── config/
│   ├── SecurityConfig.java
│   └── JwtAuthenticationFilter.java
├── controller/
│   ├── AuthController.java
│   ├── ClasificadoController.java
│   └── UsuarioController.java
├── dto/
│   ├── request/
│   └── response/
├── exception/
│   └── GlobalExceptionHandler.java
├── model/
│   ├── Usuario.java
│   ├── Clasificado.java
│   └── Categoria.java
├── repository/
│   ├── UsuarioRepository.java
│   └── ClasificadoRepository.java
├── service/
│   ├── UsuarioService.java
│   └── ClasificadoService.java
└── util/
    └── JwtUtil.java
\`\`\`

## 2. ETAPA 1: Configuración Inicial

### Contexto de la Etapa
Esta etapa establece la base del proyecto: configuración de dependencias, propiedades de aplicación y estructura de paquetes.

### Fase 1.1: Configuración de Dependencias Maven
**Archivos a editar:** pom.xml

**Instrucciones:**
1. Verificar que la versión de Spring Boot sea 3.5.7
2. Agregar dependencias: spring-boot-starter-data-jpa, spring-boot-starter-security, postgresql, jjwt
3. Ejecutar mvn clean install para verificar

### Fase 1.2: Configuración de application.properties
**Archivos a editar:** src/main/resources/application.properties

**Instrucciones:**
1. Configurar conexión a PostgreSQL
2. Configurar JPA (ddl-auto=update, show-sql=true)
3. Configurar pool de conexiones HikariCP
4. Configurar puerto del servidor

## 3. ETAPA 2: Modelo de Dominio

### Contexto de la Etapa
Esta etapa crea las enumeraciones que definen los valores permitidos para roles de usuario y estados de clasificados.

### Fase 2.1: Creación de RolUsuario
**Archivos a crear:** src/main/java/com/example/classiclick/model/RolUsuario.java

**Instrucciones:**
1. Crear la enumeración con valores: VENDEDOR, ADMINISTRADOR
2. No agregar campos adicionales ni métodos en esta fase`;

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('estructura')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'estructura'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Estructura
        </button>
        <button
          onClick={() => setActiveTab('prompt')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'prompt'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Prompt Completo
        </button>
        <button
          onClick={() => setActiveTab('ejemplo')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'ejemplo'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Plan Ejemplo
        </button>
      </div>

      {/* Content */}
      {activeTab === 'estructura' ? (
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {promptStructure.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-unrn-red">
              <h4 className="text-base font-bold text-unrn-red mb-2">{item.section}</h4>
              <p className="text-sm text-slate-300 mb-1">{item.desc}</p>
              <p className="text-xs text-slate-500 italic">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      ) : activeTab === 'prompt' ? (
        <div className="bg-black/50 p-6 rounded-lg border border-slate-700">
          <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
            {fullPrompt}
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 max-h-96 overflow-y-auto">
          <div className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
            {planExample}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para mostrar el Rol del Desarrollador
const DesarrolladorContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'estructura' | 'prompt' | 'ejemplo'>('estructura');
  
  const promptStructure = [
    {
      section: "[Contexto del sistema]",
      desc: "El proyecto ya cuenta con un conjunto de documentos base (PRD, especificaciones técnicas y plan de implementación). El objetivo es pasar de la fase de planificación a la ejecución del código.",
      tip: "Asegurar que cada implementación refleje lo definido"
    },
    {
      section: "[Rol asignado a la IA]",
      desc: "La IA debe asumir el rol de programador senior especializado en el lenguaje y entorno tecnológico elegido. En este caso: Java con Spring Boot.",
      tip: "Experiencia en el stack tecnológico del proyecto"
    },
    {
      section: "[Tarea principal]",
      desc: "Implementar las fases del plan de ejecución de forma incremental y controlada. No improvisar, no adelantar fases, no modificar archivos fuera del alcance autorizado.",
      tip: "Cada entrega debe evidenciar el cumplimiento de la fase"
    },
    {
      section: "[Contenido requerido]",
      desc: "Cada fase debe producir: Código generado (máximo 3 archivos por fase), Ejecución de pruebas (compilación y tests), Documentación de fase (IMPLEMENTATION_NOTES.md).",
      tip: "Trazabilidad y control de calidad"
    },
    {
      section: "[Reglas de interacción]",
      desc: "Relación colaborativa y controlada. La IA no actúa de forma autónoma. Antes de programar, debe explicar detalladamente la tarea. El control de avance permanece en el desarrollador humano.",
      tip: "El desarrollador humano es supervisor y garante"
    },
    {
      section: "[Formato de entrega]",
      desc: "Entrega doble: Código implementado directamente en el proyecto y actualización del documento IMPLEMENTATION_NOTES.md con estructura estandarizada.",
      tip: "Facilitar la trazabilidad del proceso"
    },
    {
      section: "[Restricciones]",
      desc: "No saltar fases ni alterar el orden. No agregar código adicional fuera del plan. No cerrar etapa sin validación explícita. Máximo 3 archivos modificables por fase.",
      tip: "Todo avance alineado con los documentos de diseño"
    }
  ];

  const fullPrompt = `"[Rol asignado a la IA] Sos un desarrollador senior especializado en Java con Spring Boot. [Contexto del sistema] En tu contexto tenés disponibles tres documentos fundamentales: el Product Requirements Document (PRD), el documento de especificaciones técnicas y el plan de ejecución, que detalla con precisión las etapas y fases del proyecto. [Tarea principal] Tu tarea principal consiste en implementar el sistema siguiendo al pie de la letra dicho plan, avanzando de manera disciplinada, ordenada y controlada, [Reglas de interacción] comenzando por la etapa 1, fase 1, y continuando únicamente cuando el desarrollador humano te lo indique de forma explícita.

[Contenido requerido] Cada fase se considerará finalizada solo cuando el código correspondiente haya sido generado en su totalidad, el proyecto compile sin errores y todas las pruebas asociadas pasen correctamente. [Formato de entrega] Una vez completada una fase, deberás registrar los resultados en el documento IMPLEMENTATION_NOTES.md, utilizando una estructura estandarizada que incluya el nombre y número de fase, la fecha, los archivos modificados, los cambios realizados, el estado de las pruebas, las decisiones adoptadas, los pendientes y los próximos pasos.

[Reglas de interacción] Antes de comenzar a programar, debés explicar detalladamente qué vas a realizar, como si se lo explicaras a un programador junior. Esa explicación debe incluir el objetivo principal de la fase, los archivos en los que vas a trabajar, los pasos concretos que planeás seguir y la forma en que verificarás los resultados obtenidos. Una vez que presentes tu propuesta, el desarrollador humano la revisará y decidirá si autoriza o no el inicio de la codificación. En caso de ser necesario, ambos podrán discutir y ajustar los detalles hasta alcanzar una definición clara y aprobada.

[Restricciones] Durante la implementación, debés respetar las siguientes pautas generales: seguir la secuencia de fases sin omitir pasos, no modificar más de tres archivos por fase, no cerrar ninguna etapa sin que el proyecto compile y las pruebas se ejecuten correctamente, y mantener en todo momento la coherencia con el PRD, las especificaciones técnicas y el stack tecnológico definido."`;

  const codeExample = `package com.classiclick.v2.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Entidad Usuario que representa a los usuarios del sistema de clasificados.
 * Mapea la tabla 'usuario' de la base de datos.
 */
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", columnDefinition = "UUID")
    private UUID id;

    @NotBlank(message = "El nombre es obligatorio")
    @Size(max = 100, message = "El nombre no puede exceder 100 caracteres")
    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    @Size(max = 100, message = "El apellido no puede exceder 100 caracteres")
    @Column(name = "apellido", nullable = false, length = 100)
    private String apellido;

    @NotBlank(message = "El correo es obligatorio")
    @Email(message = "El formato del correo no es válido")
    @Size(max = 255, message = "El correo no puede exceder 255 caracteres")
    @Column(name = "correo", nullable = false, unique = true, length = 255)
    private String correo;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(max = 255, message = "El hash de la contraseña no puede exceder 255 caracteres")
    @Column(name = "contraseña_hash", nullable = false, length = 255)
    private String contraseñaHash;

    @NotNull(message = "El rol es obligatorio")
    @Enumerated(EnumType.STRING)
    private Rol rol = Rol.VENDEDOR;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private ZonedDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private ZonedDateTime updatedAt;

    // Relación OneToMany con Clasificado
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Clasificado> clasificados = new ArrayList<>();

    // Constructores
    public Usuario() {
    }

    public Usuario(String nombre, String apellido, String correo, 
                   String contraseñaHash, String telefono, 
                   String nombreUsuario, Rol rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseñaHash = contraseñaHash;
        this.telefono = telefono;
        this.nombreUsuario = nombreUsuario;
        this.rol = rol;
    }

    // Métodos de utilidad
    public String getNombreCompleto() {
        return nombre + " " + apellido;
    }

    public boolean esAdmin() {
        return Rol.ADMIN.equals(this.rol);
    }

    public boolean esVendedor() {
        return Rol.VENDEDOR.equals(this.rol);
    }
}`;

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('estructura')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'estructura'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Estructura
        </button>
        <button
          onClick={() => setActiveTab('prompt')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'prompt'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Prompt Completo
        </button>
        <button
          onClick={() => setActiveTab('ejemplo')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'ejemplo'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Código Ejemplo
        </button>
      </div>

      {/* Content */}
      {activeTab === 'estructura' ? (
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {promptStructure.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-unrn-red">
              <h4 className="text-base font-bold text-unrn-red mb-2">{item.section}</h4>
              <p className="text-sm text-slate-300 mb-1">{item.desc}</p>
              <p className="text-xs text-slate-500 italic">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      ) : activeTab === 'prompt' ? (
        <div className="bg-black/50 p-6 rounded-lg border border-slate-700">
          <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
            {fullPrompt}
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 max-h-96 overflow-y-auto">
          <div className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
            {codeExample}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para mostrar la Depuración de forma dinámica y divertida
const DepuracionContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'proceso' | 'ejemplo' | 'practicas'>('proceso');
  const [debugStep, setDebugStep] = React.useState(0);
  
  const debugSteps = [
    {
      step: 1,
      title: "Identificar el Error",
      icon: "🔍",
      desc: "Registrar detalladamente: archivo afectado, síntoma observado y condiciones de ocurrencia",
      example: "El formulario de registro no guarda el campo teléfono cuando se deja vacío"
    },
    {
      step: 2,
      title: "Formular Prompt",
      icon: "💬",
      desc: "Describir el problema de forma objetiva, adjuntando código, logs o trazas de ejecución",
      example: "Al intentar crear un clasificado, se lanza una NullPointerException en ClasificadoService..."
    },
    {
      step: 3,
      title: "Analizar Solución",
      icon: "🧠",
      desc: "Revisar la propuesta de la IA antes de aplicarla. Verificar que respete la lógica definida",
      example: "La solución debe mantener la validación definida en fases anteriores"
    },
    {
      step: 4,
      title: "Aplicar y Validar",
      icon: "✅",
      desc: "Incorporar cambios incrementalmente, probando uno por vez con tests unitarios o de integración",
      example: "Ejecutar tests y validar que no se introduzcan regresiones"
    },
    {
      step: 5,
      title: "Documentar",
      icon: "📝",
      desc: "Registrar en IMPLEMENTATION_NOTES.md: problema original, causa detectada y acción correctiva",
      example: "Mantener trazabilidad completa entre errores y soluciones"
    }
  ];

  const debugExample = {
    problema: "NullPointerException en ClasificadoService.guardarClasificado()",
    causa: "El método intenta persistir un objeto sin ID asignado",
    solucion: "Validar que el ID esté presente antes de persistir, o usar persist() en lugar de merge()",
    codigo: `@Transactional
public ClasificadoResponseDTO guardarClasificado(ClasificadoCreacionRequestDTO dto) {
    // Validación antes de persistir
    if (dto.getId() == null) {
        Clasificado nuevo = new Clasificado(...);
        return clasificadoRepository.save(nuevo);
    }
    // ... resto del código
}`
  };

  const buenasPracticas = [
    {
      titulo: "Mentalidad Analítica",
      desc: "No todo cambio sugerido por la IA debe aplicarse inmediatamente. Verificar, comparar y ajustar.",
      icon: "🔬"
    },
    {
      titulo: "Registro Cronológico",
      desc: "Mantener un registro de errores y soluciones probadas para identificar patrones.",
      icon: "📊"
    },
    {
      titulo: "Tests Automatizados",
      desc: "Cada corrección debe estar acompañada por su respectiva prueba automatizada.",
      icon: "🧪"
    },
    {
      titulo: "Control de Versiones",
      desc: "Usar Git para aislar cambios, revertirlos en caso de falla y mantener estabilidad.",
      icon: "🌳"
    },
    {
      titulo: "Validación Incremental",
      desc: "Probar cambios uno por vez, validando que no afecten otras partes del sistema.",
      icon: "🔄"
    },
    {
      titulo: "Trazabilidad Completa",
      desc: "Documentar problema, causa y solución para mantener historial del proceso.",
      icon: "🔗"
    }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('proceso')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'proceso'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Proceso
        </button>
        <button
          onClick={() => setActiveTab('ejemplo')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'ejemplo'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Ejemplo Interactivo
        </button>
        <button
          onClick={() => setActiveTab('practicas')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'practicas'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Buenas Prácticas
        </button>
      </div>

      {/* Content */}
      {activeTab === 'proceso' ? (
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-unrn-red mb-2">Flujo de Depuración</h3>
            <p className="text-sm text-slate-400">Proceso metódico y trazable</p>
          </div>
          <div className="flex flex-col gap-4">
            {debugSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-unrn-red hover:bg-slate-800 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-unrn-red text-white text-xs font-bold px-2 py-1 rounded">Paso {step.step}</span>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{step.desc}</p>
                    <div className="bg-slate-900/50 p-2 rounded text-xs text-slate-400 italic">
                      💡 {step.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : activeTab === 'ejemplo' ? (
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-unrn-red mb-2">Ejemplo Real de Depuración</h3>
            <p className="text-sm text-slate-400">Caso: NullPointerException en ClasificadoService</p>
          </div>
          
          {/* Problema */}
          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-red-500" size={20} />
              <h4 className="font-bold text-red-400">Problema Detectado</h4>
            </div>
            <p className="text-sm text-slate-300">{debugExample.problema}</p>
          </div>

          {/* Causa */}
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="text-yellow-500" size={20} />
              <h4 className="font-bold text-yellow-400">Causa Raíz</h4>
            </div>
            <p className="text-sm text-slate-300">{debugExample.causa}</p>
          </div>

          {/* Solución */}
          <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-green-500" size={20} />
              <h4 className="font-bold text-green-400">Solución Aplicada</h4>
            </div>
            <p className="text-sm text-slate-300 mb-3">{debugExample.solucion}</p>
            <div className="bg-black/50 p-3 rounded border border-slate-700">
              <div className="font-mono text-xs text-green-400 whitespace-pre-wrap">
                {debugExample.codigo}
              </div>
            </div>
          </div>

          {/* Prompt de ejemplo */}
          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="text-blue-500" size={20} />
              <h4 className="font-bold text-blue-400">Prompt a la IA</h4>
            </div>
            <p className="text-xs text-slate-300 italic">
              "Al intentar crear un clasificado, se lanza una NullPointerException en la clase ClasificadoService. 
              El método guardarClasificado() falla al persistir un objeto sin ID. Analizá el código y proponé una 
              solución que mantenga la lógica de validación definida en la fase anterior."
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
          {buenasPracticas.map((practica, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-unrn-red/50 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{practica.icon}</div>
              <h4 className="text-base font-bold text-unrn-red mb-2">{practica.titulo}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{practica.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Slide 7: Practices (Dynamic) ---
export const PracticesSlide: React.FC<SlideProps> = ({ subStep = 0 }) => {
  const practices = [
    {
      title: "1. Entornos y Frameworks",
      icon: <Terminal size={24} />,
      desc: "La IA no siempre puede iniciar proyectos desde cero (ej: Spring Boot). La práctica es crear el esqueleto manualmente y luego cargar el contexto.",
      code: <TechIcons />
    },
    {
      title: "2. Reglas y MCP",
      icon: <FileText size={24} />,
      desc: "Definir 'Reglas de Juego'. Archivos .md con convenciones de código y uso de MCP (Model Context Protocol) para conectar con docs externos.",
      code: <RulesAndMCPContent />
    },
    {
      title: "3. Generación del PRD",
      icon: <Target size={24} />,
      desc: "IA como Project Manager. Crear un Product Requirements Document detallado antes de escribir una sola línea de código.",
      code: <PRDContent />
    },
    {
      title: "4. Especificaciones Técnicas",
      icon: <Layers size={24} />,
      desc: "IA como Arquitecto. Traducir el PRD a diseño técnico: endpoints, esquema de BD y estructura de carpetas.",
      code: <SpecsTecnicasContent />
    },
    {
      title: "5. Plan de Ejecución",
      icon: <Zap size={24} />,
      desc: "Dividir para conquistar. Crear un plan paso a paso (Fases). La IA no debe improvisar, debe seguir el plan.",
      code: <PlanEjecucionContent />
    },
    {
      title: "6. Rol de Desarrollador",
      icon: <User size={24} />,
      desc: "Ejecución disciplinada. Implementar fase por fase. Validar compilación antes de cerrar cada fase.",
      code: <DesarrolladorContent />
    },
    {
      title: "7. Depuración",
      icon: <Bug size={24} />,
      desc: "Resolución de problemas guiada. No aceptar fixes ciegamente. Mantener trazabilidad de errores.",
      code: <DepuracionContent />
    }
  ];

  return (
    <div className="w-full max-w-6xl h-[600px] flex gap-8">
      {/* Sidebar List */}
      <div className="w-1/3 flex flex-col justify-center space-y-4 border-r border-slate-800 pr-8">
        <h2 className="text-3xl font-bold mb-6 text-unrn-red">7 Prácticas</h2>
        {practices.map((p, idx) => (
          <div 
            key={idx}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
              idx === subStep 
                ? 'bg-slate-800 border-l-4 border-unrn-red translate-x-2' 
                : 'opacity-40 border-l-4 border-transparent'
            }`}
          >
            <div className={idx === subStep ? "text-white" : "text-slate-500"}>{p.icon}</div>
            <span className={`font-semibold ${idx === subStep ? "text-white" : "text-slate-500"}`}>
              {p.title}
            </span>
          </div>
        ))}
      </div>

      {/* Detail Content Area */}
      <div className="w-2/3 flex items-center justify-center relative">
        {practices.map((p, idx) => {
          if (idx !== subStep) return null;
          return (
            <div key={idx} className="absolute inset-0 flex flex-col justify-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-unrn-red to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-unrn-red/20">
                {React.cloneElement(p.icon as React.ReactElement<any>, { size: 40, color: 'white' })}
              </div>
              <h3 className="text-4xl font-bold mb-6">{p.title}</h3>
              <p className="text-2xl text-slate-300 leading-relaxed mb-8">
                {p.desc}
              </p>
              <div className="bg-black/50 p-6 rounded-lg border border-slate-700">
                {typeof p.code === 'string' ? (
                  <div className="font-mono text-green-400 text-sm">$ {p.code}</div>
                ) : (
                  p.code
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Slide 8: Real Best Practices ---
export const BestPracticesSlide: React.FC<SlideProps> = () => (
  <div className="w-full max-w-5xl animate-fade-in">
    <h2 className="text-4xl font-bold mb-12 text-center">Las Verdaderas Buenas Prácticas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Leer y Analizar", desc: "No dejar que la IA fluya sola. Cada línea generada es una hipótesis a validar." },
        { title: "Conocimiento Técnico", desc: "La IA no reemplaza saber programar. Un junior puede generar código, solo un senior sabe si es bueno." },
        { title: "Verificación Constante", desc: "Nada se da por hecho. Tests automáticos obligatorios en cada fase." },
        { title: "Diversidad de Herramientas", desc: "No casarse con Cursor. Usar builders UI, Claude, ChatGPT según necesidad." },
        { title: "IA como Herramienta", desc: "Es un martillo, no el carpintero. El éxito depende de quién la usa." },
        { title: "Madurez Profesional", desc: "El éxito no es que la IA programe, es que trabaje CON el desarrollador, no POR él." }
      ].map((card, i) => (
        <div key={i} className="bg-card-bg p-6 rounded-xl border-t-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
          <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Slide 9: AI Problems ---
export const ProblemsSlide: React.FC<SlideProps> = () => {
  const [activeTab, setActiveTab] = React.useState<'determinista' | 'alucinaciones' | 'caso'>('determinista');
  const [showComparison, setShowComparison] = React.useState(false);

  return (
    <div className="w-full max-w-6xl animate-fade-in h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-2 flex-shrink-0">
        <h2 className="text-3xl font-bold mb-1">El Lado Oscuro de la IA</h2>
        <p className="text-slate-400 text-sm">Limitaciones, riesgos y malas prácticas</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-2 justify-center flex-shrink-0">
        <button
          onClick={() => setActiveTab('determinista')}
          className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'determinista'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Determinista vs Probabilístico
        </button>
        <button
          onClick={() => setActiveTab('alucinaciones')}
          className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'alucinaciones'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Alucinaciones
        </button>
        <button
          onClick={() => setActiveTab('caso')}
          className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'caso'
              ? 'bg-unrn-red text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          Caso Real
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-2">
        {activeTab === 'determinista' ? (
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-slate-700 p-5 rounded-xl w-full">
              <h3 className="text-3xl font-bold text-unrn-red mb-4 text-center">Dos Mundos Diferentes</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Software Determinista */}
                <div className="bg-blue-500/10 border-2 border-blue-500/30 p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-blue-400">Software Determinista</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Mismo input = Mismo output siempre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Comportamiento predecible y reproducible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Ejecuta instrucciones fijas definidas por el desarrollador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Garantiza reproducibilidad</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-blue-500/20 p-3 rounded text-center">
                    <div className="text-2xl font-mono text-blue-300">2 + 2 = 4</div>
                    <div className="text-sm text-blue-400 mt-1">Siempre, sin excepciones</div>
                  </div>
                </div>

                {/* IA Probabilística */}
                <div className="bg-red-500/10 border-2 border-red-500/30 p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Brain className="text-red-400" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-red-400">IA Probabilística</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span>Predice la respuesta más probable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span>Mismo input puede dar diferentes outputs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span>No razona, solo predice secuencias de texto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span>Puede generar información falsa con confianza</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-red-500/20 p-3 rounded text-center">
                    <div className="text-2xl font-mono text-red-300">2 + 2 = ?</div>
                    <div className="text-sm text-red-400 mt-1">Puede variar según el contexto</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm text-slate-300">
                  <strong className="text-yellow-400">Conclusión:</strong> Mientras el software determinista garantiza reproducibilidad, 
                  el enfoque probabilístico de la IA aporta potencia creativa pero a costa de perder control sobre la consistencia.
                </p>
              </div>
            </div>
          </div>
        ) : activeTab === 'alucinaciones' ? (
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-slate-700 p-5 rounded-xl w-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="text-red-500" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">Alucinaciones</h3>
                  <p className="text-sm text-slate-400">Información falsa expresada con total confianza</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">¿Qué son?</h4>
                  <p className="text-sm text-slate-300">
                    Generación de información falsa o imprecisa: código inexistente, librerías inventadas 
                    o explicaciones que parecen coherentes pero no tienen sustento real.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-400 mb-2">¿Por qué ocurren?</h4>
                  <p className="text-sm text-slate-300">
                    La IA no razona ni comprende, predice secuencias de texto plausibles. 
                    Cuando el contexto es ambiguo, "rellena los huecos" con información estadísticamente probable.
                  </p>
                </div>
              </div>

              {/* Comparativo Riesgos vs Cómo detectarlas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border-2 border-red-500/30 p-4 rounded-lg">
                  <h4 className="font-bold text-red-400 mb-3">Riesgos</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Errores sutiles que afectan funcionalidad</li>
                    <li>• Problemas de seguridad</li>
                    <li>• Compromiso de la mantenibilidad</li>
                    <li>• Código que parece correcto pero no funciona</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border-2 border-green-500/30 p-4 rounded-lg">
                  <h4 className="font-bold text-green-400 mb-3">Cómo detectarlas</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>✓ Revisar documentación oficial</li>
                    <li>✓ Ejecutar el código sugerido</li>
                    <li>✓ Contrastar resultados</li>
                    <li>✓ No asumir que la IA tiene razón solo porque suena convincente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 w-full flex justify-center">
            <div className="rounded-lg overflow-hidden border-2 border-red-500/30 bg-slate-900 p-2 max-w-5xl">
              <div className="relative w-full max-h-[600px] overflow-auto bg-slate-950 rounded">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}imagenes/problemaIA.jpg`} 
                  alt="Problema con IA eliminando tests" 
                  className="w-full h-auto max-w-full"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.15) brightness(1.08) saturate(1.1)',
                    minWidth: '100%',
                    maxWidth: '100%'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Slide 10: Conclusion ---
export const ConclusionSlide: React.FC<SlideProps> = () => (
  <div className="w-full max-w-4xl text-center animate-slide-up">
    <h2 className="text-6xl font-bold mb-12">Conclusión</h2>
    <p className="text-3xl font-light leading-relaxed text-slate-200 mb-16">
      "El éxito del Vibe Coding no está en dejar que la 'vibra' guíe el código, sino en hacer que <span className="text-unrn-red font-bold">la razón, el conocimiento y la ética</span> guíen la vibra."
    </p>
    
    <div className="flex justify-center gap-4">
        <button className="px-8 py-3 bg-unrn-red hover:bg-red-700 text-white rounded-full font-bold transition-colors">
          Muchas Gracias
        </button>
    </div>
    
    <div className="mt-20 opacity-50">
      <img src="https://picsum.photos/seed/qr/100/100" alt="QR Contacto" className="w-24 h-24 mx-auto rounded-lg grayscale" />
      <p className="text-xs mt-2">Repositorio & Contacto</p>
    </div>
  </div>
);