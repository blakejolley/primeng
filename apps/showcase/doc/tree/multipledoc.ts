import { Code } from '@/domain/code';
import { NodeService } from '@/service/nodeservice';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'multiple-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is necessary to add to existing selections however this can be configured with
                disabling the <i>metaKeySelection</i> property. Note that in touch enabled devices, Tree always ignores metaKey.
            </p>
            <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex items-center mb-6 gap-2">
                <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />
        </div>
        <app-code [code]="code" selector="tree-multiple-demo"></app-code>
    `
})
export class MultipleDoc implements OnInit {
    metaKeySelection: boolean = false;

    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    code: Code = {
        basic: `<div class="flex items-center mb-6 gap-2">
    <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
    <label for="input-metakey">MetaKey</label>
</div>
<p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />`,

        html: `<div class="card">
    <div class="flex items-center mb-6 gap-2">
        <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
        <label for="input-metakey">MetaKey</label>
    </div>
    <p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'tree-multiple-demo',
    templateUrl: './tree-multiple-demo.html',
    standalone: true,
    imports: [Tree, ToggleSwitchModule],
    providers: [NodeService]
})
export class TreeMultipleDemo implements OnInit {
    metaKeySelection: boolean = false;

    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,

        service: ['NodeService'],

        data: `
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`
    };
}
