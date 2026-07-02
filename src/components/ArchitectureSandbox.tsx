import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Database, Server, Cpu, Radio, Network, HelpCircle, HardDrive } from 'lucide-react';

interface DiagramNode {
  id: string;
  label: string;
  icon: any;
  desc: string;
  color: string;
  glow: string;
}

export default function ArchitectureSandbox() {
  const [activeTab, setActiveTab] = useState<'E-commerce' | 'WMS' | 'POS'>('E-commerce');
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Nodes to draw on the visual canvas
  const nodes: DiagramNode[] = [
    { id: 'client', label: 'Client Node', icon: Radio, desc: 'Next.js Frontend / Handheld Terminal / Electron Shell', color: 'text-cyber-blue border-cyber-blue/30', glow: 'shadow-[0_0_15px_rgba(0,240,255,0.2)]' },
    { id: 'gateway', label: 'API Gateway', icon: Network, desc: 'Nginx Proxy, PM2 Load Balancer, Route Router', color: 'text-cyber-violet border-cyber-violet/30', glow: 'shadow-[0_0_15px_rgba(189,0,255,0.2)]' },
    { id: 'cache', label: 'Redis Cluster', icon: Cpu, desc: 'Dynamic session cache, Inventory Mutex Lock', color: 'text-cyber-pink border-cyber-pink/30', glow: 'shadow-[0_0_15px_rgba(255,0,122,0.2)]' },
    { id: 'backend', label: 'Node.js Core', icon: Server, desc: 'Express API Server running thread queues', color: 'text-white border-white/20', glow: 'shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
    { id: 'database', label: 'PostgreSQL DB', icon: Database, desc: 'Normalized schema tables, relational ledgers', color: 'text-cyber-emerald border-cyber-emerald/30', glow: 'shadow-[0_0_15px_rgba(0,255,102,0.2)]' }
  ];

  const flows = {
    'E-commerce': {
      triggerLabel: 'Place Customer Order',
      steps: [
        { label: 'Client Request', node: 'client', log: 'User submits cart. Client React app secures session, requests SSL endpoint.' },
        { label: 'Gateway Route', node: 'gateway', log: 'Nginx parses path, forwards JSON payload to Node.js backend pool.' },
        { label: 'Mutex Lock', node: 'cache', log: 'Redis sets distributed transaction lock on Item Stock count to avoid double-allocation.' },
        { label: 'Write Order', node: 'backend', log: 'Node.js validates billing credentials and payment token via SSLCommerz gateway.' },
        { label: 'Relational Commit', node: 'database', log: 'PostgreSQL begins atomic transaction. Records receipt and inventory ledger write.' }
      ]
    },
    WMS: {
      triggerLabel: 'Scan Barcode SKU',
      steps: [
        { label: 'Scanner Read', node: 'client', log: 'Zebra scanner captures barcode. React Native triggers Socket.io packet.' },
        { label: 'Broadcaster Node', node: 'gateway', log: 'Gateway receives secure socket packet, forwards to real-time sync process.' },
        { label: 'Fetch Cache', node: 'cache', log: 'Redis queries shelf parameters instantly, verifying active picking routes.' },
        { label: 'Queue Engine', node: 'backend', log: 'Node worker validates picker path index, optimizes route layout coordinates.' },
        { label: 'Floor Database Update', node: 'database', log: 'PostgreSQL updates warehouse slot, committing picker work metrics.' }
      ]
    },
    POS: {
      triggerLabel: 'Process POS Billing',
      steps: [
        { label: 'HotKey Checkout', node: 'client', log: 'Cashier triggers touch billing. Electron queries local SQLite DB instantly.' },
        { label: 'Offline Printer', node: 'gateway', log: 'Local hardware daemon fires serial connection, immediately printing invoice receipt.' },
        { label: 'Buffer Queue', node: 'cache', log: 'Offline transaction buffer logs data locally, awaiting cloud connection check.' },
        { label: 'Background Delta Sync', node: 'backend', log: 'Delta-sync process merges offline records to Node API, resolving auditing.' },
        { label: 'Cloud Replication', node: 'database', log: 'PostgreSQL commits transaction into corporate enterprise analytics.' }
      ]
    }
  };

  const handleStartFlow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setActiveStep(0);
  };

  useEffect(() => {
    if (activeStep === -1 || !isRunning) return;

    const currentFlow = flows[activeTab];
    if (activeStep < currentFlow.steps.length) {
      const stepData = currentFlow.steps[activeStep];
      
      // Print logs with typing effect or immediate push
      setLogs(prev => [...prev, `[STEP ${activeStep + 1} - ${stepData.label}]: ${stepData.log}`]);

      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 1600);

      return () => clearTimeout(timer);
    } else {
      setLogs(prev => [...prev, `>> [OK]: FLOW COMPLETED SECURELY. All services status check: OK.`]);
      setIsRunning(false);
    }
  }, [activeStep, isRunning, activeTab]);

  useEffect(() => {
    setActiveStep(-1);
    setLogs([`Select "${flows[activeTab].triggerLabel}" to watch system execution telemetry...`]);
    setIsRunning(false);
  }, [activeTab]);

  return (
    <section id="sandbox" className="py-20 px-4 sm:px-8 relative bg-cyber-gray-950/20 border-y border-cyber-gray-900 overflow-hidden bg-grid-pattern-dense">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyber-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyber-gray-900 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-blue text-xs font-mono">
              <Network className="w-4 h-4 text-cyber-blue animate-pulse" />
              <span>[03] REAL-TIME ARCHITECTURAL FLOW VISUALIZER</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl">
              System Engineering Sandbox
            </h2>
          </div>
          <p className="text-sm font-sans text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Witness how Kawser designs systems. Interact with this live terminal simulator to watch transactional network packets travel from client screens down to the storage layers.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-start space-x-2 mb-8 bg-cyber-gray-950 border border-cyber-gray-900 p-1 rounded-lg w-fit">
          {(['E-commerce', 'WMS', 'POS'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => !isRunning && setActiveTab(tab)}
              disabled={isRunning}
              className={`px-5 py-2 text-xs font-mono rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-cyber-blue text-cyber-dark font-semibold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'text-gray-400 hover:text-white disabled:opacity-50'
              }`}
            >
              {tab === 'E-commerce' && 'ApexScale E-commerce'}
              {tab === 'WMS' && 'LogiSync WMS'}
              {tab === 'POS' && 'OmniPOS Hardware'}
            </button>
          ))}
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Diagram Node Map */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-cyber-gray-950/60 border border-cyber-gray-900 rounded-lg p-6 relative">
            
            {/* Absolute visual status */}
            <div className="absolute top-4 right-4 flex items-center space-x-1.5 text-[10px] font-mono text-gray-500">
              <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-cyber-emerald animate-ping' : 'bg-yellow-500'}`} />
              <span>{isRunning ? 'TRANSMITTING' : 'IDLE'}</span>
            </div>

            {/* Nodes Render Container */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-8 relative">
              
              {/* Connector SVG lines overlay (Hidden on small screens) */}
              <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 z-0 bg-cyber-gray-900 pointer-events-none" />

              {nodes.map((node, index) => {
                const NodeIcon = node.icon;
                const flowData = flows[activeTab];
                
                // Check if this node is currently active in the sequence
                const isNodeActive = activeStep >= 0 && activeStep < flowData.steps.length && flowData.steps[activeStep].node === node.id;
                // Check if this node has been passed in the sequence
                const isNodePassed = activeStep > 0 && flowData.steps.slice(0, activeStep).some(s => s.node === node.id);

                return (
                  <div key={node.id} className="relative z-10 flex flex-col items-center">
                    
                    {/* Node Core Frame */}
                    <div
                      className={`w-16 h-16 rounded-full border-2 bg-cyber-gray-950 flex items-center justify-center transition-all duration-500 ${
                        isNodeActive 
                          ? `border-cyber-blue bg-cyber-blue/10 scale-110 ${node.glow}` 
                          : isNodePassed 
                          ? 'border-cyber-emerald bg-cyber-emerald/5' 
                          : 'border-cyber-gray-800'
                      }`}
                      id={`sandbox-node-${node.id}`}
                    >
                      <NodeIcon className={`w-6 h-6 transition-colors duration-500 ${
                        isNodeActive ? 'text-cyber-blue animate-pulse' : isNodePassed ? 'text-cyber-emerald' : 'text-gray-500'
                      }`} />
                    </div>

                    {/* Connection status dot */}
                    {isNodeActive && (
                      <span className="absolute -top-1 inline-flex rounded-full h-3 w-3 bg-cyber-blue" />
                    )}

                    {/* Text block */}
                    <div className="text-center mt-3">
                      <p className={`text-xs font-mono font-medium ${isNodeActive ? 'text-cyber-blue' : isNodePassed ? 'text-cyber-emerald' : 'text-gray-400'}`}>
                        {node.label}
                      </p>
                      <p className="text-[9px] font-sans text-gray-500 mt-1 max-w-[120px] mx-auto leading-tight hidden md:block">
                        {node.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Run Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-cyber-gray-900 gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Active System Routine:</p>
                <p className="text-sm font-sans font-semibold text-white">
                  {activeTab === 'E-commerce' && 'Next.js CSR Checkout API Worker Process'}
                  {activeTab === 'WMS' && 'WMS Scanner Socket Frame Allocation'}
                  {activeTab === 'POS' && 'Delta Resolution Receipt Printing'}
                </p>
              </div>

              <button
                onClick={handleStartFlow}
                disabled={isRunning}
                className={`w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyber-gray-900 border ${
                  isRunning ? 'border-cyber-gray-800 text-gray-500 cursor-not-allowed' : 'border-cyber-blue text-cyber-blue hover:bg-cyber-blue/15 hover:glow-border-blue'
                } font-mono text-xs px-6 py-3 rounded transition-all duration-300`}
                id="sandbox-trigger-btn"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'text-gray-600' : 'text-cyber-blue fill-cyber-blue/10 animate-pulse'}`} />
                <span>{isRunning ? 'Executing Routine...' : flows[activeTab].triggerLabel}</span>
              </button>
            </div>

          </div>

          {/* Right Panel: Telemetry Logging Stream */}
          <div className="lg:col-span-4 bg-cyber-gray-950 border border-cyber-gray-900 rounded-lg overflow-hidden flex flex-col justify-between shadow-xl">
            {/* Header */}
            <div className="bg-cyber-gray-900 px-4 py-3 border-b border-cyber-gray-900 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">TRANSACTIONAL_LOG_STREAM</span>
              <span className="w-2 h-2 rounded-full bg-cyber-emerald" />
            </div>

            {/* Logs Body */}
            <div className="p-4 flex-1 h-[250px] overflow-y-auto bg-black/40 font-mono text-xs text-gray-400 space-y-2" id="telemetry-log-screen">
              <AnimatePresence initial={false}>
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`leading-relaxed ${
                      log.startsWith('>>') ? 'text-cyber-emerald font-semibold' : 
                      log.includes('[STEP') ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Micro Specs */}
            <div className="p-3 bg-cyber-gray-900 border-t border-cyber-gray-900/60 flex items-center justify-between text-[9px] font-mono text-gray-600">
              <span>LEDGER: ENCRYPTION_ACTIVE</span>
              <span>ENGINE: POSTGRESQL v15</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
