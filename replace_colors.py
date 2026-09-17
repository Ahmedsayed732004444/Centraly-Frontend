import os
import re

directory = r'C:\Users\AIO\source\reposVsc\Centraly-Frontend\src'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # If file doesn't have blue-500, skip
    if 'blue-500' not in content:
        return

    original_content = content
    modified = False
    
    # We will just do a simple replacement for the exact strings
    
    replacements = [
        ('className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-white"', 'className={tokens.input}'),
        ('className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${form.formState.errors.name ? \'border-red-500\' : \'border-gray-300\'}`}', 'className={`${tokens.input} ${form.formState.errors.name ? \'border-red-500\' : \'\'}`}'),
        ('className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white ${form.formState.errors.departmentId ? \'border-red-500\' : \'border-gray-300\'}`}', 'className={`${tokens.select} ${form.formState.errors.departmentId ? \'border-red-500\' : \'\'}`}'),
        ('className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"', 'className={`${tokens.input} pl-10 bg-gray-50`}')
    ]

    # Manual mapping for common classes
    # 1. ProductFilters / SupplierFilters searches
    content = content.replace('className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"', 'className={`${tokens.input} bg-gray-50`}')
    
    # 2. Selects in filters
    content = content.replace('className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 min-w-[140px]"', 'className={`${tokens.select} bg-gray-50 min-w-[140px]`}')
    
    # 3. CustomerDetails select
    content = content.replace('className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-white"', 'className={tokens.select}')
    
    # 4. SupplierForm inputs
    content = content.replace('className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"', 'className={tokens.input}')
    content = content.replace('className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-left"', 'className={`${tokens.input} text-left`}')
    content = content.replace('className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"', 'className={`${tokens.input} resize-none`}')
    
    # 5. Header search
    content = content.replace('className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"', 'className={`${tokens.input} bg-gray-50`}')
    
    # 6. SalesHistory search
    content = content.replace('className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"', 'className={`${tokens.input} pl-10`}')
    
    # 7. PosProductGrid inputs
    content = content.replace('className="w-full h-full pl-12 pr-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm transition-all"', 'className={`${tokens.input} pl-12 h-full`}')
    content = content.replace('className="w-full h-full pl-4 pr-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm transition-all appearance-none cursor-pointer"', 'className={`${tokens.select} h-full cursor-pointer`}')

    # 8. CategoryForms
    content = content.replace('className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${form.formState.errors.name ? \'border-red-500\' : \'border-gray-300\'}`}', 'className={`${tokens.input} mt-1 ${form.formState.errors.name ? \'border-red-500\' : \'\'}`}')
    content = content.replace('className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white ${form.formState.errors.departmentId ? \'border-red-500\' : \'border-gray-300\'}`}', 'className={`${tokens.select} mt-1 ${form.formState.errors.departmentId ? \'border-red-500\' : \'\'}`}')
    
    if content != original_content:
        # Check if we need to add tokens import
        if 'import { tokens }' not in content:
            # find first import
            import_match = re.search(r'import\s+.*?;', content)
            if import_match:
                content = content.replace(import_match.group(0), "import { tokens } from '@/shared/styles/tokens';\n" + import_match.group(0))
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
